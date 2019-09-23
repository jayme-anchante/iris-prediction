# data

```
import pandas as pd
from sklearn.datasets import load_iris

df = pd.DataFrame(load_iris().data, columns=load_iris().feature_names)
df.loc[:, "target"] = iris().target
df.loc[df["target"] == 0, "target"] = "setosa"
df.loc[df["target"] == 1, "target"] = "versicolor"
df.loc[df["target"] == 2, "target"] = "virginica"
df.to_csv("iris.csv", index=False)
````
