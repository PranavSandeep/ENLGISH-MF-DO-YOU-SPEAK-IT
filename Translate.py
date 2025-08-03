import googletrans as translate
import asyncio

async def translate_text(text):
        async with translate.Translator() as translator:
                result = await translator.translate(text)

        return result.text