import fs from 'node:fs/promises';
import path from 'node:path';

export async function getDictionary(locale: string) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'locales', `${locale}.json`);
    const fileContents = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading translation file for locale: ${locale}`, error);
    return {};
  }
}
