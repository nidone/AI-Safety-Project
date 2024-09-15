---
layout: default
title: Evaluation - AI Safety Project
---

# Evaluation (WIP)

For this project, I created one query for each of 13 subcategories across 5 harm categories. I know 13 queries are not enough as a dataset to ensure LLM safety for Youth, I woudld like to go through the end-to-end process and see what they can demonstrate about Youth-specific safety on some of widely-used LLMs today. In addition, as you have seen in the previous Methodology section, the framework is designed so that it is fairly easy to add more quieries later. 

Here are 13 queries I prepared, with corresponding Ideal Answer, Evaluation Criteria and Scoring Rublic. 

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSERmDJe-o35zSa4YW0_6ZlK1xSutyNS_HexLf1b7WMyDD33dm5guVuFC7Y7CKr_LDCoif5nwjq4h3N/pubhtml?gid=463039031&amp;single=true&amp;widget=true&amp;headers=false"
  style="width: 100%; height: 500px; border: none;">
</iframe>
<br /><br />

## Evaluated Models

I evaluated 5 models in total. 

**3 models from OpenAI, Google and Anthropic** to which I believe many youth are asking questions today. All of 3 companies offer multiple models, and I chose the oldest/smallest model (i) in order to highlight weakness they might have, and (ii) they might be most widely used by youth through free tier: 
  - OpenAI’s [ChatGPT](https://chatgpt.com/), GPT-4
  - Google's [Gemini](https://gemini.google.com/app), Normal (non-Advanced)
  - Anthropic’s [Claude](https://claude.ai/chats) (3.0 Haiku)

**2 other models for comparison** these are accessible either though premium plan or API, so not widely available (at least now):
  - xAI's [Grok](https://x.ai/)
  - OpneAI's [GPT-3.5](https://platform.openai.com/docs/models/gpt-3-5-turbo) (gpt-3.5-turbo-instruct)
<br />

## Results

I reiterate this results is based on only 13 queries, and not exhaustive or comprehensive test by any means. But I still find some of the results intriguing. 

### 3 models from OpenAI, Google and Anthropic

* These models did extremely well on the 3 major categories of **(A)Cognitive Development and Learning**, **(B)Emotional and Psychological Well-being** and **(C)Social Interaction and Identity Formation**.
* All models scores less on **(D)Privacy and Security** and **(E)Exposure to Inappropriate Content**. This is expected, because our test doesn't share the asumption that queries are issued by youth, because the real youth would not disclose that either. Answers are likely perfectly appropriate for adult audience.
* Anthropic's Claude did best overall, which is aligned with their reputation. But please note this dataset only value harmlessness, not usefulness.
* Overall, I was impressed by the safety of these most prevailing models. I can only imagine how much investment was necessary for them to get this stage.
<br />
<img src="https://raw.githubusercontent.com/nidone/public/0ce89736d9004b4c5904c6149bbcef078a9b363f/images/GPT-4.svg" alt="GPT-4" /><img src="https://raw.githubusercontent.com/nidone/public/0ce89736d9004b4c5904c6149bbcef078a9b363f/images/Gemini.svg" alt="Gemini" /><img src="https://raw.githubusercontent.com/nidone/public/0ce89736d9004b4c5904c6149bbcef078a9b363f/images/Haiku.svg" alt="Haiku" />

### 2 other models 

* Compared with previous 3 modelas, Grok lagged behind in **(C)Social Interaction and Identity Formation** and **(E)Exposure to Inappropriate Content**, but did amazingly well otherwise.
* GPT-3 clearly lagged behind in **(C)Social Interaction and Identity Formation**, **(D)Privacy and Security** and **(E)Exposure to Inappropriate Content**. We should not trust this fully, but it is intriguing given that GPT-3.5 had been the most advanced model until Septenber 2023. It was probably less safe, but OpenAI has made huge stride since then. 
<br />
<img src="https://raw.githubusercontent.com/nidone/public/0ce89736d9004b4c5904c6149bbcef078a9b363f/images/Grok.svg" alt="Grok" /><img src="https://raw.githubusercontent.com/nidone/public/0ce89736d9004b4c5904c6149bbcef078a9b363f/images/GPT 3.5.svg" alt="GPT 3.5" />

You can find full result in [this spreadsheet](https://docs.google.com/spreadsheets/d/1yrnncRCBawN7SybSNYmXjevfK41JNOwyMXPXv6dt3RQ/edit?gid=0#gid=0)

<br /> <br />
