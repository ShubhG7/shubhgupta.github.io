// Import all blog content from separate files
import { cartClassifierBlog } from './cart-classifier';
import { stockPricePredictionBlog } from './stock-price-prediction';
import { aslInterpreterBlog } from './asl-interpreter';
import { strokePredictionBlog } from './stroke-prediction';
import { housePricePredictionBlog } from './house-price-prediction';
import { antColonyOptimizationBlog } from './ant-colony-optimization';
import { flightDelayPredictionBlog } from './flight-delay-prediction';
import { budgetTrackerBlog } from './budget-tracker';
import { orionVirtualAssistantBlog } from './orion-virtual-assistant';
import { etlPipelineAirflowBlog } from './etl-pipeline-airflow';
import { allInCasinoBlog } from './all-in-casino';
import { llmInferenceOptimizationBlog } from './llm-inference-optimization';
import { carPricePredictionBlog } from './car-price-prediction';
import { researchPaperBlog } from './research-paper';
import { resumaiBlog } from './resumai';
import { doceditaiBlog } from './doceditai';
import { legailtyBlog } from './legailty';
import { tubotBlog } from './tubot';
import { patchpilotBlog } from './patchpilot';
import { hivemailBlog } from './hivemail';

// Export all blogs as a single object
export const blogContents = {
  'hivemail': hivemailBlog,
  'patchpilot': patchpilotBlog,
  'cart-classifier': cartClassifierBlog,
  'stock-price-prediction': stockPricePredictionBlog,
  'asl-interpreter': aslInterpreterBlog,
  'stroke-prediction': strokePredictionBlog,
  'house-price-prediction': housePricePredictionBlog,
  'ant-colony-optimization': antColonyOptimizationBlog,
  'flight-delay-prediction': flightDelayPredictionBlog,
  'budget-tracker': budgetTrackerBlog,
  'orion': orionVirtualAssistantBlog,
  'etl-pipeline-airflow': etlPipelineAirflowBlog,
  'all-in-casino': allInCasinoBlog,
  'llm-inference-optimization': llmInferenceOptimizationBlog,
  'car-price-prediction': carPricePredictionBlog,
  'research-paper-abstract-essence': researchPaperBlog,
  'resumai': resumaiBlog,
  'doceditai': doceditaiBlog,
  'legailty': legailtyBlog,
  'tubot': tubotBlog,
  // Add more blogs as they are created
};

// Export individual blogs for direct access
export {
  patchpilotBlog,
  hivemailBlog,
  cartClassifierBlog,
  stockPricePredictionBlog,
  aslInterpreterBlog,
  strokePredictionBlog,
  housePricePredictionBlog,
  antColonyOptimizationBlog,
  flightDelayPredictionBlog,
  budgetTrackerBlog,
  orionVirtualAssistantBlog,
  etlPipelineAirflowBlog,
  allInCasinoBlog,
  llmInferenceOptimizationBlog,
  carPricePredictionBlog,
  researchPaperBlog,
  resumaiBlog,
  doceditaiBlog,
  legailtyBlog,
  tubotBlog,
}; 