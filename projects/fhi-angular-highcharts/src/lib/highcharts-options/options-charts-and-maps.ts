import { Axis, SeriesOptionsType } from 'highcharts';

export const OptionsChartsAndMaps = {
  chart: {
    styledMode: true,
    spacingBottom: 35
  },
  caption: {
    useHTML: true,
    y: 25
  },
  credits: {
    enabled: true,
    position: {
      align: 'left',
      verticalAlign: 'bottom',
      x: 10,
    },
  },
  series: [],
  title: {
    align: 'left',
    margin: 5,
    widthAdjust: 0
  },
  subtitle: {
    align: 'left',
    margin: 15,
    widthAdjust: 0
  },
  exporting: {
    allowHTML: true,
    buttons: {
      contextButton: {
        enabled: false
      }
    },
    csv: {
      itemDelimiter: ';',
      columnHeaderFormatter: (item: SeriesOptionsType) => {
        if (!item || item instanceof Axis) {
          return '';
        } else {
          return item.name;
        }
      }
    },
    fallbackToExportServer: false
  }
};

