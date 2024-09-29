---
layout: default
title: Conclusions - AI Safety Project
---

# Conclusions

- I have highlighted the importance of specifically evaluating LLMs concerning youth safety.
- Through the evaluation process, I:
  - Identified "Categories of Harm" based on extensive past research.
  - Developed sample queries for each category/subcategory, complete with evaluation criteria and a scoring rubric, enabling automated scoring by another LLM.
  - Conducted evaluations using a small dataset across five popular LLMs.
- Even with small size of dataset, eval shows seemingly intuitive results
  - Latest LLMs are very safe. Their improvement in the past few years is very solid. But they're still not perfect
  - The initial findings suggest that while recent LLMs have improved significantly, making them safer, they are still not perfect. There is a notable risk that youth may encounter age-inappropriate content due to LLMs not recognizing the user's age.

## Discussions

- **Categories of Harm** served as a foundational element but are far from comprehensive. Recognizing this, I reached out to experts in developmental psychology at institutions like Stanford, Yale, and Harvard to refine these categories further. Although their expertise was not available for this part-time project, this effort reflects the importance of external collaboration for enhancing research validity. 
- **Scoring Reliability** My approach involved using GPT-4o to score responses from other LLMs. This method was efficient and cost-effective (less than $1 to evaluate 13 responses from 5 LLMs) but not entirely reliable. Scoring inconsistencies could happen between different versions of GPT-4 family, and even within the same version.

## Future Work

- **Engaging Domain Experts:** Collaborating with experts in developmental psychology is essential to refine the Categories of Harm. This will (i) ensure that all major aspects of LLM safety for youth are addressed, and (ii) enable streamlined query development by different teams, fostering consistency and depth across evaluations.
- **Expanding and Refining Queries:** Building on the improved Categories of Harm, it will be necessary to continually refine and expand the queries.
- **Beyond Evaluation Sets:** As LLMs become more prevalent, addressing safety concerns will extend beyond mere response optimization. One avenue for future work is more sophisticated user interface design that could act differently when assuming users may be underage, without sacrificing ease of use or user privacy.
<br /> <br />