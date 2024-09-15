---
layout: default
title: Conclusions - AI Safety Project
---

# Conclusions

- I proposed the importance of evaluate LLMs specifically for Youth
- I went through actual eval process
  - Defined "Categories of Harm" based on past researches in various fields
  - Created Sample Query for each category/subcategory, with corresponding Evaluation Criteria and Scoring Rublic), so that it can be auto-scored by another LLM 
  - Run evaluation with small set of queries across 5 popular LLMs
- Even with small size of dataset, eval shows seemingly intuitive results
  - Latest LLMs are very safe. Their improvement in the past few years is very solid. But they're still not perfect
  - There is clear chance Youth will see non-age-approriate content, because LLMs often don't know who users are
- I made all materials avaialable for feedback and contribution
  - Categories of Harm (Doc)
  - Initial 13 Queries used, with Evaluation Criteria and Scoring Rublic (Sheet, JSONL)
  - Evaluation Result (Sheet)
  - Everything else (GitHub)

## Discussions

- **Categories of Harm** is far from perfect: It served my purpose this time - it is not too big, reasonalbly MECE and all relevant to LLM interaction. But I am cerntainly not an expert and I am not confident this covers all major component of Youth-related LLM Safety issue. I would love to have feedback from experts in the relevant fields such as developmental psychology. (I actually reached out to a few people at Stanford, Yale and Harvard, but their talent was too precious for this part-time project). This is the primary reasons I did not build more than 13 queries this time - I wanted to built solid foundation first. 
- **Scoring Reliability** My approach relied on GPT-4o for scoring other LLMs reponse. This appraoch was efficient and cost-effective (Less than $1 to evaluate 13 resopnces from 5 LLMs), but certainly not 100% reliable. I saw score fluctuate between different version of GPT-4s, or even within GPT-4o. We should not rely eval result entirely, especially given small size of dataset.      
- **Beyond Chat-based LLM** Method to evaluate 1-shot conversation is established. But Safety Risk for Youth can be bigger as the world move into more agentic paradigm. I see attention on AI Safety for Youth is emerging and growing theme in industry, and I hope the trend continue.  

## Future Work

###To make this eval process more meaningful

- We need to involve epxerts from related fields such as developmental phychology and develop more robust framework for Categories of Harm
- We need to build more queries (with Evaluation Criteria and Scoring Rublic), and improve quality.

<br /> <br />

[Content remains the same as in the previous artifact]
