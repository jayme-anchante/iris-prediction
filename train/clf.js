var RandomForestClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    var trees = new Array();

    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[3] <= 0.75) {
            classes[0] = 40; 
            classes[1] = 0; 
            classes[2] = 0; 
        } else {
            if (features[3] <= 1.550000011920929) {
                if (features[2] <= 4.6499998569488525) {
                    classes[0] = 0; 
                    classes[1] = 36; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 5; 
                    classes[2] = 1; 
                }
            } else {
                if (features[3] <= 1.75) {
                    classes[0] = 0; 
                    classes[1] = 1; 
                    classes[2] = 3; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 34; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[2] <= 2.449999988079071) {
            classes[0] = 45; 
            classes[1] = 0; 
            classes[2] = 0; 
        } else {
            if (features[2] <= 4.8500001430511475) {
                if (features[2] <= 4.75) {
                    classes[0] = 0; 
                    classes[1] = 38; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                    classes[2] = 1; 
                }
            } else {
                if (features[3] <= 1.699999988079071) {
                    classes[0] = 0; 
                    classes[1] = 1; 
                    classes[2] = 4; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 28; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[2] <= 2.449999988079071) {
            classes[0] = 41; 
            classes[1] = 0; 
            classes[2] = 0; 
        } else {
            if (features[3] <= 1.699999988079071) {
                if (features[1] <= 2.3000000715255737) {
                    classes[0] = 0; 
                    classes[1] = 3; 
                    classes[2] = 1; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 40; 
                    classes[2] = 0; 
                }
            } else {
                classes[0] = 0; 
                classes[1] = 0; 
                classes[2] = 35; 
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[2] <= 2.449999988079071) {
            classes[0] = 38; 
            classes[1] = 0; 
            classes[2] = 0; 
        } else {
            if (features[0] <= 6.25) {
                if (features[2] <= 4.8500001430511475) {
                    if (features[3] <= 1.449999988079071) {
                        classes[0] = 0; 
                        classes[1] = 28; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 6; 
                        classes[2] = 1; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 7; 
                }
            } else {
                if (features[0] <= 7.099999904632568) {
                    if (features[0] <= 6.599999904632568) {
                        if (features[2] <= 5.049999952316284) {
                            classes[0] = 0; 
                            classes[1] = 2; 
                            classes[2] = 3; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 7; 
                        }
                    } else {
                        if (features[2] <= 5.150000095367432) {
                            classes[0] = 0; 
                            classes[1] = 7; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 8; 
                        }
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 13; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[3] <= 0.800000011920929) {
            classes[0] = 35; 
            classes[1] = 0; 
            classes[2] = 0; 
        } else {
            if (features[2] <= 4.950000047683716) {
                if (features[2] <= 4.450000047683716) {
                    classes[0] = 0; 
                    classes[1] = 31; 
                    classes[2] = 0; 
                } else {
                    if (features[1] <= 2.899999976158142) {
                        classes[0] = 0; 
                        classes[1] = 4; 
                        classes[2] = 2; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 10; 
                        classes[2] = 0; 
                    }
                }
            } else {
                if (features[0] <= 6.099999904632568) {
                    classes[0] = 0; 
                    classes[1] = 1; 
                    classes[2] = 7; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 30; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[3] <= 0.7000000029802322) {
            classes[0] = 43; 
            classes[1] = 0; 
            classes[2] = 0; 
        } else {
            if (features[2] <= 4.75) {
                if (features[0] <= 5.549999952316284) {
                    if (features[3] <= 1.25) {
                        classes[0] = 0; 
                        classes[1] = 5; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 4; 
                        classes[2] = 1; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 30; 
                    classes[2] = 0; 
                }
            } else {
                if (features[3] <= 1.649999976158142) {
                    classes[0] = 0; 
                    classes[1] = 2; 
                    classes[2] = 2; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 33; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[0] <= 5.549999952316284) {
            if (features[2] <= 2.449999988079071) {
                classes[0] = 30; 
                classes[1] = 0; 
                classes[2] = 0; 
            } else {
                classes[0] = 0; 
                classes[1] = 7; 
                classes[2] = 3; 
            }
        } else {
            if (features[3] <= 1.699999988079071) {
                if (features[2] <= 4.8500001430511475) {
                    if (features[1] <= 3.149999976158142) {
                        classes[0] = 0; 
                        classes[1] = 27; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 1; 
                        classes[1] = 2; 
                        classes[2] = 0; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                    classes[2] = 2; 
                }
            } else {
                if (features[3] <= 1.8499999642372131) {
                    if (features[0] <= 6.25) {
                        classes[0] = 0; 
                        classes[1] = 1; 
                        classes[2] = 3; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 6; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 35; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[0] <= 5.450000047683716) {
            if (features[3] <= 0.75) {
                classes[0] = 36; 
                classes[1] = 0; 
                classes[2] = 0; 
            } else {
                classes[0] = 0; 
                classes[1] = 5; 
                classes[2] = 1; 
            }
        } else {
            if (features[0] <= 6.1499998569488525) {
                if (features[2] <= 4.75) {
                    if (features[2] <= 3.850000023841858) {
                        classes[0] = 1; 
                        classes[1] = 3; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 23; 
                        classes[2] = 0; 
                    }
                } else {
                    if (features[3] <= 1.8499999642372131) {
                        classes[0] = 0; 
                        classes[1] = 4; 
                        classes[2] = 3; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 6; 
                    }
                }
            } else {
                if (features[3] <= 1.550000011920929) {
                    classes[0] = 0; 
                    classes[1] = 11; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 27; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[0] <= 5.450000047683716) {
            if (features[2] <= 2.449999988079071) {
                classes[0] = 36; 
                classes[1] = 0; 
                classes[2] = 0; 
            } else {
                classes[0] = 0; 
                classes[1] = 4; 
                classes[2] = 2; 
            }
        } else {
            if (features[3] <= 1.550000011920929) {
                if (features[1] <= 3.149999976158142) {
                    classes[0] = 0; 
                    classes[1] = 36; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 1; 
                    classes[2] = 0; 
                }
            } else {
                if (features[1] <= 3.149999976158142) {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 23; 
                } else {
                    if (features[2] <= 5.549999952316284) {
                        classes[0] = 0; 
                        classes[1] = 4; 
                        classes[2] = 1; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 11; 
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[3] <= 0.800000011920929) {
            classes[0] = 44; 
            classes[1] = 0; 
            classes[2] = 0; 
        } else {
            if (features[3] <= 1.699999988079071) {
                if (features[2] <= 4.900000095367432) {
                    classes[0] = 0; 
                    classes[1] = 39; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                    classes[2] = 2; 
                }
            } else {
                classes[0] = 0; 
                classes[1] = 0; 
                classes[2] = 34; 
            }
        }
    
        return findMax(classes);
    });
    
    this.predict = function(features) {
        var classes = new Array(3).fill(0);
        for (var i = 0; i < trees.length; i++) {
            classes[trees[i](features)]++;
        }
        return findMax(classes);
    }

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 == 4) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var prediction = new RandomForestClassifier().predict(features);
        console.log(prediction);

    }
}