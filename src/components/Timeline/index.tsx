import { Typography } from "antd";
import { useMemo } from "react";
import { useStateMachine } from "little-state-machine";

import {
  Container,
  TimelineContent,
  TimelineTempo,
  TimelineTimeInterval,
} from "./styles";

const tempo = ["00:00", "12:00", "23:59"];

export function getHoursPercentRange({
  hours,
  minutes,
  seconds,
  days = 1,
}: {
  days?: number;
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const dayInSeconds = 24 * days * 60 * 60;

  const calcHours = hours * 60 * 60;
  const calcMinutes = minutes * 60;
  const calcSeconds = seconds;
  const calcTotalSeconds = calcHours + calcMinutes + calcSeconds;

  return (100 * calcTotalSeconds) / dayInSeconds;
}

export function toHoursAndMinutes(totalSeconds: number) {
  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return {
    hours,
    minutes,
    seconds,
    totalHoursPercent: getHoursPercentRange({ hours, minutes, seconds }),
  };
}

const getTimeInterval = (flightDifference: number, departureTime: number) => ({
  flightDifference: toHoursAndMinutes(flightDifference).totalHoursPercent,
  startTime: toHoursAndMinutes(departureTime).totalHoursPercent,
});

export const Timeline: React.FC = () => {
  const {
    state: { schedule },
  } = useStateMachine();

  const getTempo = useMemo(
    () =>
      schedule.flights?.map(({ arrivaltime, departuretime }) =>
        getTimeInterval(arrivaltime - departuretime, departuretime)
      ),
    [schedule.flights]
  );

  const getIdleTime = useMemo(
    () =>
      schedule.flights?.map(({ arrivaltime }, index, list) =>
        getTimeInterval(
          (list?.[index + 1]?.departuretime || 0) - arrivaltime,
          arrivaltime
        )
      ),
    [schedule.flights]
  );

  return (
    <Container>
      <TimelineTempo>
        {tempo.map((time) => (
          <Typography.Text key={time}>{time}</Typography.Text>
        ))}
      </TimelineTempo>
      <TimelineContent>
        {getTempo?.map(({ flightDifference, startTime }) => (
          <TimelineTimeInterval
            key={`${flightDifference}-${startTime}-tempo`}
            style={{
              width: `${flightDifference || 0}%`,
              left: `${startTime || 0}%`,
              backgroundColor: "#C3EDE3",
            }}
          />
        ))}
        {getIdleTime?.map(({ flightDifference, startTime }) => (
          <TimelineTimeInterval
            key={`${flightDifference}-${startTime}-idle`}
            style={{
              width: `${flightDifference || 0}%`,
              left: `${startTime || 0}%`,
              backgroundColor: "#c3b4f4",
            }}
          />
        ))}
      </TimelineContent>
    </Container>
  );
};
