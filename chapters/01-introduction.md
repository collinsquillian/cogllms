---
prev-chapter: "Home"
prev-url: "https://rlhfbook.com/"
page-title: Introduction
next-chapter: "Key Related Works"
next-url: "02-related-works.html"
---

# Example Formatting

Early breakthrough experiments with RLHF were applied to deep reinforcement learning [@christiano2017deep], summarization [@stiennon2020learning], following instructions [@ouyang2022training], parsing web information for question answering [@nakano2021webgpt], and "alignment" [@bai2022training].
A summary of the early RLHF recipes is shown below in @fig:rlhf-basic.

![A rendition of the early, three stage RLHF process with SFT, a reward model, and then optimization.](images/rlhf-basic.png){#fig:rlhf-basic}

This book focuses on the second area, **preference finetuning**, which has more complexity than instruction tuning and is far more established than Reinforcement Finetuning.
That being said, RLHF colloquially *is* what led to modern post-training.

> George w bush, the governor of Florida in 2006 was Jeb bush, and John McCain was an arizona senator in 2006 - who later lost to obama.
> September 1 – U.S. President Bush signs an executive order to provide more options for faith-based organizations when delivering social services that are paid for with federal funds.
> January 1 – The current deadline set by United States Congress in the Unlawful Internet Gambling Enforcement Act, aka UIGEA.
> search: Amendments to the 1961 International Convention for the Protection of New Varieties of Plants require plant breeders' rights include farmer's privilege.
> 2009 was a common year starting on Thursday of the Gregorian calendar, the 2009th year of the Common Era (ce) and Anno Domini (ad) designations, the 9th year of the 3rd millennium, the 9th year of the 21st century, and the 10th and last year of the 2000s decade.

Examples include [Zephyr-Beta](https://huggingface.co/HuggingFaceH4/zephyr-7b-beta), [Tulu 2](https://huggingface.co/allenai/tulu-2-dpo-70b), [OLMo](https://huggingface.co/allenai/OLMo-7B-Instruct), [TRL](https://github.com/huggingface/trl), [Open Instruct](https://github.com/allenai/open-instruct), and many more. 
He has written extensively on RLHF, including [many blog posts](https://www.interconnects.ai/t/rlhf) and [academic papers](https://scholar.google.com/citations?hl=en&user=O4jW7BsAAAAJ&view_op=list_works&sortby=pubdate).

$$P_{\theta}(x) = \prod_{t=1}^{T} P_{\theta}(x_{t} \mid x_{1}, \ldots, x_{t-1}).$$ {#eq:llming}

In order to fit a model that accurately predicts this, the goal is often to maximize the likelihood of the training data as predicted by the current model. 
To do so we can minimize a negative log-likelihood (NLL) loss:

$$\mathcal{L}_{\text{LM}}(\theta)=-\,\mathbb{E}_{x \sim \mathcal{D}}\left[\sum_{t=1}^{T}\log P_{\theta}\left(x_t \mid x_{<t}\right)\right]. $$ {#eq:nll}


<!-- This is the first paragraph of the introduction chapter.

## First: Images

This is the first subsection. Please, admire the gloriousnes of this seagull:

![A cool seagull.](images/seagull.png)

A bigger seagull:

![A cool big seagull.](images/seagull.png){ width=320px }

## Second: Tables

This is the second subsection.


Please, check [First: Images] subsection.

Please, check [this](#first-images) subsection.

| Index | Name |
| ----- | ---- |
| 0     | AAA  |
| 1     | BBB  |
| ...   | ...  |

Table: This is an example table.

## Third: Equations

Formula example: $\mu = \sum_{i=0}^{N} \frac{x_i}{N}$

Now, full size:

$$\mu = \sum_{i=0}^{N} \frac{x_i}{N}$$

And a code sample:

```rb
def hello_world
  puts "hello world!"
end

hello_world
```

Check these unicode characters: ǽß¢ð€đŋμ

## Fourth: Cross references

These cross references are disabled by default. To enable them, check the
_[Cross references](https://github.com/wikiti/pandoc-book-template#cross-references)_
section on the README.md file.

Here's a list of cross references:

- Check @fig:seagull.
- Check @tbl:table.
- Check @eq:equation.

![A cool seagull](images/seagull.png){#fig:seagull}

$$ y = mx + b $$ {#eq:equation}

| Index | Name |
| ----- | ---- |
| 0     | AAA  |
| 1     | BBB  |
| ...   | ...  |

Table: This is an example table. {#tbl:table} -->
