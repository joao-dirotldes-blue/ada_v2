import { AnthropicProvider } from './registry';
import Cookies from 'js-cookie';

// Set the Anthropic API key in cookies
export function setupAnthropicProvider(env?: Record<string, string>) {
  // Obtém a chave API da variável de ambiente em vez de hardcoded
  const apiKey = env?.ANTHROPIC_API_KEY || '';
  
  if (apiKey) {
    const apiKeys = { Anthropic: apiKey };

    // Set the API key in cookies
    Cookies.set('apiKeys', JSON.stringify(apiKeys), { path: '/', expires: 365 });

    // Set the selected provider to Anthropic
    Cookies.set('selectedProvider', 'Anthropic', { path: '/', expires: 365 });

    // Set the selected model to Claude 3.7 Sonnet
    Cookies.set('selectedModel', 'claude-3-7-sonnet-20250219', { path: '/', expires: 365 });
  }

  return new AnthropicProvider();
}
