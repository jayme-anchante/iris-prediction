from sklearn.datasets import load_iris
from sklearn.tree import tree
from sklearn_porter import Porter
import pickle

# Load data and train the classifier:
samples = load_iris()
X, y = samples.data, samples.target
clf = tree.DecisionTreeClassifier()
clf.fit(X, y)

# Export:
porter = Porter(clf, language='js')
output = porter.export(embed_data=True)
print(output)

with open("clf.js", "w") as file:
    file.write(output)
