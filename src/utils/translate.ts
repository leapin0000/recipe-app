import axios from "axios";

// DeepL翻訳関数: 日本語のテキストを英語に翻訳
async function translateToEnglish(text: string): Promise<string> {
  const API_KEY = import.meta.env.VITE_DEEPL_API_KEY;

  // DeepL 無料プラン
  const url = `https://api-free.deepl.com/v2/translate`;

  try {
    const response = await axios.post(url, null, {
      params: {
        auth_key: API_KEY,
        text: text,
        source_lang: "JA", // 日本語から翻訳
        target_lang: "EN", // 英語に翻訳
      },
    });
    return response.data.translations[0].text;
  } catch (error) {
    console.error("Error translating text to English:", error);
    throw error;
  }
}

// DeepL翻訳関数: 英語のテキストを日本語に翻訳
async function translateToJapanese(text: string): Promise<string> {
  const API_KEY = import.meta.env.VITE_DEEPL_API_KEY;
  const url = `https://api-free.deepl.com/v2/translate`;

  try {
    const response = await axios.post(url, null, {
      params: {
        auth_key: API_KEY,
        text: text,
        source_lang: "EN", // 英語から翻訳
        target_lang: "JA", // 日本語に翻訳
      },
    });
    return response.data.translations[0].text;
  } catch (error) {
    console.error("Error translating text to Japanese:", error);
    throw error;
  }
}

export { translateToEnglish, translateToJapanese };
