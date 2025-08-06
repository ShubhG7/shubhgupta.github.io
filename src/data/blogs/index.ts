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

// Export all blogs as a single object
export const blogContents = {
  'cart-classifier': cartClassifierBlog,
  'stock-price-prediction': stockPricePredictionBlog,
  'asl-interpreter': aslInterpreterBlog,
  'stroke-prediction': strokePredictionBlog,
  'house-price-prediction': housePricePredictionBlog,
  'ant-colony-optimization': antColonyOptimizationBlog,
  'flight-delay-prediction': flightDelayPredictionBlog,
  'budget-tracker': budgetTrackerBlog,
  'orion-virtual-assistant': orionVirtualAssistantBlog,
  'etl-pipeline-airflow': etlPipelineAirflowBlog,
  'all-in-casino': allInCasinoBlog,
  // Add more blogs as they are created
};

// Export individual blogs for direct access
export {
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
}; 