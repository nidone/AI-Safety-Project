---
layout: default
title: Evaluation - AI Safety Project
---

# Evaluation

For this project, I devised a set of 13 queries across five harm categories to assess the safety of large language models (LLMs) for youth interactions. While I acknowledge that 13 queries are insufficient for a comprehensive dataset, this initial evaluation aims to explore the potential youth-specific safety issues with some of today's widely-used LLMs. Additionally, the framework is designed to easily incorporate more queries in the future.

Here are the 13 queries I prepared, each with its corresponding Ideal Answer, Evaluation Criteria, and Scoring Rubric. You can view the details through the embedded document below, or as [JSON file](https://github.com/nidone/AI-Safety-Project/tree/main/dataset).<br />

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSERmDJe-o35zSa4YW0_6ZlK1xSutyNS_HexLf1b7WMyDD33dm5guVuFC7Y7CKr_LDCoif5nwjq4h3N/pubhtml?gid=463039031&amp;single=true&amp;widget=true&amp;headers=false"
  style="width: 100%; height: 500px; border: none;">
</iframe>
<br />

## Evaluated Models

I assessed five models in total:

**Three Models from Mainstream Providers:** These include OpenAI’s GPT-4, Google's Gemini, and Anthropic’s Claude 3.0 Haiku. I selected the oldest or smallest model variants, as these are more likely to be accessible to youth through free tiers:
  - OpenAI’s [ChatGPT](https://chatgpt.com/), GPT-4
  - Google's [Gemini](https://gemini.google.com/app), Normal (non-Advanced)
  - Anthropic’s [Claude](https://claude.ai/chats), 3.0 Haiku

**Two Additional Models for Comparison:** These are less accessible, available through premium plans or APIs:
  - xAI's [Grok](https://x.ai/)
  - OpneAI's [GPT-3.5](https://platform.openai.com/docs/models/gpt-3-5-turbo) (gpt-3.5-turbo-instruct)
<br /><br />

## Results

This evaluation is based on only 13 queries and is not exhaustive. However, some intriguing patterns have emerged:

### Mainstream Models

- **Performance:** These models performed exceptionally well in categories such as Cognitive Development and Learning, Emotional and Psychological Well-being, and Social Interaction and Identity Formation.
- **Weaknesses:** Lower scores were observed in Privacy and Security, and Exposure to Inappropriate Content. This is partly because the test queries do not indicate that they are issued by youth, which would likely alter the appropriateness of the responses for an adult audience.
- **Noteworthy Observation:** Anthropic’s Claude performed the best overall, showcasing its design towards minimizing harmful content. It notably declined to generate a horror story in one query, reflecting its cautious approach.

Overall, the sophistication and safety of these models are impressive, highlighting the significant investments made to enhance their capabilities.
<br /><br />
<img src="https://raw.githubusercontent.com/nidone/AI-Safety-Project/07258a4f9fd885316b9b3050cb99dfa6e0e1b2f7/images/GPT-4.svg" alt="GPT-4" /><img src="https://raw.githubusercontent.com/nidone/AI-Safety-Project/e0b9ccbd0ac0efe68100fe6b98177f3d75dc16e1/images/Gemini.svg" alt="Gemini" /><img src="https://raw.githubusercontent.com/nidone/AI-Safety-Project/07258a4f9fd885316b9b3050cb99dfa6e0e1b2f7/images/Haiku.svg" alt="Haiku" />

### Additional Models

- **Comparison:** Grok and GPT-3.5 showed varied performance. While Grok lagged in Social Interaction and Exposure to Inappropriate Content, it was competitive elsewhere.
  - Elon Musk often prompts Grok for humorous responses, which is funny but may also affect public perception of its seriousness as a solid AI product.
- **Older Model:** GPT-3.5, previously a leading model, showed that it lagged behind in newer safety benchmarks, underscoring rapid advancements in model safety.

These insights, although preliminary, highlight the dynamic nature of LLM development and the ongoing need for targeted safety evaluations.
<br /><br />
<img src="https://raw.githubusercontent.com/nidone/AI-Safety-Project/07258a4f9fd885316b9b3050cb99dfa6e0e1b2f7/images/Grok.svg" alt="Grok" /><img src="https://raw.githubusercontent.com/nidone/AI-Safety-Project/07258a4f9fd885316b9b3050cb99dfa6e0e1b2f7/images/GPT%203.5.svg" alt="GPT 3.5" />

<br /> <br />

You can find full results in [this spreadsheet](https://docs.google.com/spreadsheets/d/1yrnncRCBawN7SybSNYmXjevfK41JNOwyMXPXv6dt3RQ/edit?gid=0#gid=0)

<br /> <br />
