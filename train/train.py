import numpy as np
import xgboost as xgb

data = np.genfromtxt("iris.csv", dtype="f8,f8,f8,f8,U10", delimiter=",", names=True)

rng = np.random.RandomState()

valid_index = rng.choice([i for i in range(len(data))], 30, False)
valid_index = [i in valid_index for i in range(len(data))]
train_index = [i == False for i in valid_index]

train = np.concatenate([data[name][train_index].reshape(-1, 1) for name in
                        data.dtype.names], axis=1)
valid = np.concatenate([data[name][valid_index].reshape(-1, 1) for name in
                        data.dtype.names], axis=1)

dtrain = xgb.DMatrix(train[:, :4], label=train[:, 4])]])
dvalid = xgb.DMatrix(valid[:, :4], label=valid[:, 4])]])

# https://www.kdnuggets.com/2017/03/simple-xgboost-tutorial-iris-dataset.html
