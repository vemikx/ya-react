import AnalyticsIcon from './AnalyticsIcon';
import GeneratorIcon from './GeneratorIcon';
import HistoryIcon from './HistoryIcon';
import CancelIcon from './CancelIcon';

const icons = {
  analytics: AnalyticsIcon,
  generator: GeneratorIcon,
  history: HistoryIcon,
  cancel: CancelIcon,
} as const;

export default icons;
