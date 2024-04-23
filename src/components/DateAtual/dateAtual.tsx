import * as S from './styled';

export function DateAtual() {
  const dateAtual = new Date();

  const formatWeekday = (weekday: number) => {
    const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    return weekdays[weekday];
  };

  const formatMonth = (month: number) => {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro'
    ];
    return months[month];
  };

  const formattedDate = `${formatWeekday(
    dateAtual.getDay()
  )}. ${dateAtual.getDate()} de ${formatMonth(
    dateAtual.getMonth()
  )} de ${dateAtual.getFullYear()}`;

  return (
    <S.ContainerDate>
      <S.Date>{formattedDate}</S.Date>
    </S.ContainerDate>
  );
}
