from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn_porter import Porter

# Load data and train the classifier:
samples = load_iris()
X, y = samples.data, samples.target
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    shuffle=True,
    stratify=y
)
clf = RandomForestClassifier(
    n_estimators=10,
    min_samples_split=3,
    min_samples_leaf=3,
    max_depth=5,
    max_features=2,
    oob_score=True,
    random_state=42
)
clf.fit(X_train, y_train)

# Checking the accuracy in the holdout set:
y_pred = clf.predict(X_test)
accuracy = round(accuracy_score(y_test, y_pred) * 100, 2)

print("\n\nAccuracy in the holdout set of 30 samples:", str(accuracy), "%\n\n")


# Export:
porter = Porter(clf, language="js")
output = porter.export(embed_data=True)
with open("clf.js", "w") as file:
    file.write(output)
