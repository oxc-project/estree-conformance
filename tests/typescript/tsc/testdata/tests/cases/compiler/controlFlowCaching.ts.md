__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "dim",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 34
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "offsets",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 43
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 48
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "acommon",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 57
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "centerAnchorLimit",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 76
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 79
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "has",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 84
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "lin",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 89
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isRtl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 106
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 109,
                      "end": 113
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_isRtl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 114,
                      "end": 120
                    },
                    "optional": false,
                    "computed": false,
                    "start": 109,
                    "end": 120
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 109,
                  "end": 122
                },
                "definite": false,
                "start": 101,
                "end": 122
              }
            ],
            "declare": false,
            "start": 97,
            "end": 123
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 180,
                    "end": 184
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 188
                  },
                  "optional": false,
                  "computed": false,
                  "start": 180,
                  "end": 188
                },
                "definite": false,
                "start": 176,
                "end": 188
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ta",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 192
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 195,
                        "end": 199
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "chart",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 205
                      },
                      "optional": false,
                      "computed": false,
                      "start": 195,
                      "end": 205
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "theme",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 211
                    },
                    "optional": false,
                    "computed": false,
                    "start": 195,
                    "end": 211
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "axis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 216
                  },
                  "optional": false,
                  "computed": false,
                  "start": 195,
                  "end": 216
                },
                "definite": false,
                "start": 190,
                "end": 216
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "position",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 226
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 230
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "position",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 239
                  },
                  "optional": false,
                  "computed": false,
                  "start": 229,
                  "end": 239
                },
                "definite": false,
                "start": 218,
                "end": 239
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "leftBottom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 259
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "position",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 270
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "rightOrTop",
                    "raw": "\"rightOrTop\"",
                    "start": 275,
                    "end": 287
                  },
                  "start": 262,
                  "end": 287
                },
                "definite": false,
                "start": 249,
                "end": 287
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rotation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 297
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 301
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rotation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 310
                    },
                    "optional": false,
                    "computed": false,
                    "start": 300,
                    "end": 310
                  },
                  "operator": "%",
                  "right": {
                    "type": "Literal",
                    "value": 360,
                    "raw": "360",
                    "start": 313,
                    "end": 316
                  },
                  "start": 300,
                  "end": 316
                },
                "definite": false,
                "start": 289,
                "end": 316
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 331
                },
                "init": null,
                "definite": false,
                "start": 326,
                "end": 331
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 337
                },
                "init": null,
                "definite": false,
                "start": 333,
                "end": 337
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "titlePos",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 347
                },
                "init": null,
                "definite": false,
                "start": 339,
                "end": 347
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "titleRotation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 362
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 365,
                  "end": 366
                },
                "definite": false,
                "start": 349,
                "end": 366
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "titleOffset",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 379
                },
                "init": null,
                "definite": false,
                "start": 368,
                "end": 379
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "axisVector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 391
                },
                "init": null,
                "definite": false,
                "start": 381,
                "end": 391
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tickVector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 403
                },
                "init": null,
                "definite": false,
                "start": 393,
                "end": 403
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anchorOffset",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 417
                },
                "init": null,
                "definite": false,
                "start": 405,
                "end": 417
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "labelOffset",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 430
                },
                "init": null,
                "definite": false,
                "start": 419,
                "end": 430
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "labelAlign",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 442
                },
                "init": null,
                "definite": false,
                "start": 432,
                "end": 442
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "labelGap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 452,
                  "end": 460
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 463,
                            "end": 467
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "chart",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 468,
                            "end": 473
                          },
                          "optional": false,
                          "computed": false,
                          "start": 463,
                          "end": 473
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "theme",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 474,
                          "end": 479
                        },
                        "optional": false,
                        "computed": false,
                        "start": 463,
                        "end": 479
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "axis",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 484
                      },
                      "optional": false,
                      "computed": false,
                      "start": 463,
                      "end": 484
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 489
                    },
                    "optional": false,
                    "computed": false,
                    "start": 463,
                    "end": 489
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "labelGap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 498
                  },
                  "optional": false,
                  "computed": false,
                  "start": 463,
                  "end": 498
                },
                "definite": false,
                "start": 452,
                "end": 498
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taFont",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 514
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 517,
                        "end": 518
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "font",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 519,
                        "end": 523
                      },
                      "optional": false,
                      "computed": false,
                      "start": 517,
                      "end": 523
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 528,
                          "end": 530
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "majorTick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 531,
                          "end": 540
                        },
                        "optional": false,
                        "computed": false,
                        "start": 528,
                        "end": 540
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 544,
                            "end": 546
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "majorTick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 547,
                            "end": 556
                          },
                          "optional": false,
                          "computed": false,
                          "start": 544,
                          "end": 556
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "font",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 561
                        },
                        "optional": false,
                        "computed": false,
                        "start": 544,
                        "end": 561
                      },
                      "start": 528,
                      "end": 561
                    },
                    "start": 517,
                    "end": 562
                  },
                  "operator": "||",
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ta",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 567,
                        "end": 569
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 574
                      },
                      "optional": false,
                      "computed": false,
                      "start": 567,
                      "end": 574
                    },
                    "operator": "&&",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 580
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 581,
                          "end": 585
                        },
                        "optional": false,
                        "computed": false,
                        "start": 578,
                        "end": 585
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "font",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 590
                      },
                      "optional": false,
                      "computed": false,
                      "start": 578,
                      "end": 590
                    },
                    "start": 567,
                    "end": 590
                  },
                  "start": 517,
                  "end": 591
                },
                "definite": false,
                "start": 508,
                "end": 591
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleFont",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 612
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 615,
                      "end": 616
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "titleFont",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 617,
                      "end": 626
                    },
                    "optional": false,
                    "computed": false,
                    "start": 615,
                    "end": 626
                  },
                  "operator": "||",
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ta",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 631,
                        "end": 633
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "title",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 634,
                        "end": 639
                      },
                      "optional": false,
                      "computed": false,
                      "start": 631,
                      "end": 639
                    },
                    "operator": "&&",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 643,
                          "end": 645
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 646,
                          "end": 651
                        },
                        "optional": false,
                        "computed": false,
                        "start": 643,
                        "end": 651
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "font",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 656
                      },
                      "optional": false,
                      "computed": false,
                      "start": 643,
                      "end": 656
                    },
                    "start": 631,
                    "end": 656
                  },
                  "start": 615,
                  "end": 657
                },
                "definite": false,
                "start": 601,
                "end": 657
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taFontColor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 678
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 681,
                          "end": 682
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fontColor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 692
                        },
                        "optional": false,
                        "computed": false,
                        "start": 681,
                        "end": 692
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 697,
                            "end": 699
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "majorTick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 700,
                            "end": 709
                          },
                          "optional": false,
                          "computed": false,
                          "start": 697,
                          "end": 709
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ta",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 713,
                              "end": 715
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "majorTick",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 716,
                              "end": 725
                            },
                            "optional": false,
                            "computed": false,
                            "start": 713,
                            "end": 725
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fontColor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 726,
                            "end": 735
                          },
                          "optional": false,
                          "computed": false,
                          "start": 713,
                          "end": 735
                        },
                        "start": 697,
                        "end": 735
                      },
                      "start": 681,
                      "end": 736
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 741,
                          "end": 743
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 744,
                          "end": 748
                        },
                        "optional": false,
                        "computed": false,
                        "start": 741,
                        "end": 748
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 752,
                            "end": 754
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 755,
                            "end": 759
                          },
                          "optional": false,
                          "computed": false,
                          "start": 752,
                          "end": 759
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fontColor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 769
                        },
                        "optional": false,
                        "computed": false,
                        "start": 752,
                        "end": 769
                      },
                      "start": 741,
                      "end": 769
                    },
                    "start": 681,
                    "end": 770
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": "black",
                    "raw": "\"black\"",
                    "start": 774,
                    "end": 781
                  },
                  "start": 681,
                  "end": 781
                },
                "definite": false,
                "start": 667,
                "end": 781
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleFontColor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 807
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 811
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "titleFontColor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 812,
                        "end": 826
                      },
                      "optional": false,
                      "computed": false,
                      "start": 810,
                      "end": 826
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 831,
                          "end": 833
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 834,
                          "end": 839
                        },
                        "optional": false,
                        "computed": false,
                        "start": 831,
                        "end": 839
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 843,
                            "end": 845
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 846,
                            "end": 851
                          },
                          "optional": false,
                          "computed": false,
                          "start": 843,
                          "end": 851
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fontColor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 852,
                          "end": 861
                        },
                        "optional": false,
                        "computed": false,
                        "start": 843,
                        "end": 861
                      },
                      "start": 831,
                      "end": 861
                    },
                    "start": 810,
                    "end": 862
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": "black",
                    "raw": "\"black\"",
                    "start": 866,
                    "end": 873
                  },
                  "start": 810,
                  "end": 873
                },
                "definite": false,
                "start": 791,
                "end": 873
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleGap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 893
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 897,
                        "end": 898
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "titleGap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 899,
                        "end": 907
                      },
                      "optional": false,
                      "computed": false,
                      "start": 897,
                      "end": 907
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 911,
                      "end": 912
                    },
                    "start": 897,
                    "end": 912
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 916,
                    "end": 917
                  },
                  "alternate": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 920,
                          "end": 921
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "titleGap",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 922,
                          "end": 930
                        },
                        "optional": false,
                        "computed": false,
                        "start": 920,
                        "end": 930
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 935,
                            "end": 937
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 938,
                            "end": 943
                          },
                          "optional": false,
                          "computed": false,
                          "start": 935,
                          "end": 943
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ta",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 947,
                              "end": 949
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "title",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 950,
                              "end": 955
                            },
                            "optional": false,
                            "computed": false,
                            "start": 947,
                            "end": 955
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "gap",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 956,
                            "end": 959
                          },
                          "optional": false,
                          "computed": false,
                          "start": 947,
                          "end": 959
                        },
                        "start": 935,
                        "end": 959
                      },
                      "start": 920,
                      "end": 960
                    },
                    "operator": "||",
                    "right": {
                      "type": "Literal",
                      "value": 15,
                      "raw": "15",
                      "start": 964,
                      "end": 966
                    },
                    "start": 920,
                    "end": 966
                  },
                  "start": 896,
                  "end": 966
                },
                "definite": false,
                "start": 883,
                "end": 966
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleOrientation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 994
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 998
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "titleOrientation",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 999,
                        "end": 1015
                      },
                      "optional": false,
                      "computed": false,
                      "start": 997,
                      "end": 1015
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1020,
                          "end": 1022
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1023,
                          "end": 1028
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1020,
                        "end": 1028
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1032,
                            "end": 1034
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1035,
                            "end": 1040
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1032,
                          "end": 1040
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "orientation",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1041,
                          "end": 1052
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1032,
                        "end": 1052
                      },
                      "start": 1020,
                      "end": 1052
                    },
                    "start": 997,
                    "end": 1053
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": "axis",
                    "raw": "\"axis\"",
                    "start": 1057,
                    "end": 1063
                  },
                  "start": 997,
                  "end": 1063
                },
                "definite": false,
                "start": 976,
                "end": 1063
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taMajorTick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1084
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1087,
                          "end": 1091
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "chart",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1092,
                          "end": 1097
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1087,
                        "end": 1097
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "theme",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1098,
                        "end": 1103
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1087,
                      "end": 1103
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getTick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1104,
                      "end": 1111
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1087,
                    "end": 1111
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "major",
                      "raw": "\"major\"",
                      "start": 1112,
                      "end": 1119
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1122
                    }
                  ],
                  "optional": false,
                  "start": 1087,
                  "end": 1123
                },
                "definite": false,
                "start": 1073,
                "end": 1123
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taMinorTick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1144
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1147,
                          "end": 1151
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "chart",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1152,
                          "end": 1157
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1147,
                        "end": 1157
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "theme",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1158,
                        "end": 1163
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1147,
                      "end": 1163
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getTick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1164,
                      "end": 1171
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1147,
                    "end": 1171
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "minor",
                      "raw": "\"minor\"",
                      "start": 1172,
                      "end": 1179
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1181,
                      "end": 1182
                    }
                  ],
                  "optional": false,
                  "start": 1147,
                  "end": 1183
                },
                "definite": false,
                "start": 1133,
                "end": 1183
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taMicroTick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1193,
                  "end": 1204
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1207,
                          "end": 1211
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "chart",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1212,
                          "end": 1217
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1207,
                        "end": 1217
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "theme",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1218,
                        "end": 1223
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1207,
                      "end": 1223
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getTick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1224,
                      "end": 1231
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1207,
                    "end": 1231
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "micro",
                      "raw": "\"micro\"",
                      "start": 1232,
                      "end": 1239
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1241,
                      "end": 1242
                    }
                  ],
                  "optional": false,
                  "start": 1207,
                  "end": 1243
                },
                "definite": false,
                "start": 1193,
                "end": 1243
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taStroke",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1262
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "stroke",
                      "raw": "\"stroke\"",
                      "start": 1265,
                      "end": 1273
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1277,
                      "end": 1278
                    },
                    "start": 1265,
                    "end": 1278
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1281,
                      "end": 1282
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stroke",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1283,
                      "end": 1289
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1281,
                    "end": 1289
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ta",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1292,
                      "end": 1294
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stroke",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1295,
                      "end": 1301
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1292,
                    "end": 1301
                  },
                  "start": 1265,
                  "end": 1301
                },
                "definite": false,
                "start": 1254,
                "end": 1301
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1311,
                  "end": 1315
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "taFont",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1318,
                    "end": 1324
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1327,
                        "end": 1328
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "normalizedLength",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1329,
                        "end": 1345
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1327,
                      "end": 1345
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1346,
                              "end": 1347
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "splitFontString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1348,
                              "end": 1363
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1346,
                            "end": 1363
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "taFont",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1364,
                              "end": 1370
                            }
                          ],
                          "optional": false,
                          "start": 1346,
                          "end": 1371
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1372,
                          "end": 1376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1346,
                        "end": 1376
                      }
                    ],
                    "optional": false,
                    "start": 1327,
                    "end": 1377
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1380,
                    "end": 1381
                  },
                  "start": 1318,
                  "end": 1381
                },
                "definite": false,
                "start": 1311,
                "end": 1381
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cosr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1391,
                  "end": 1395
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1398,
                      "end": 1402
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "abs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1403,
                      "end": 1406
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1398,
                    "end": 1406
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1407,
                          "end": 1411
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cos",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1412,
                          "end": 1415
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1407,
                        "end": 1415
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rotation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1416,
                              "end": 1424
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1427,
                                "end": 1431
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PI",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1432,
                                "end": 1434
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1427,
                              "end": 1434
                            },
                            "start": 1416,
                            "end": 1434
                          },
                          "operator": "/",
                          "right": {
                            "type": "Literal",
                            "value": 180,
                            "raw": "180",
                            "start": 1437,
                            "end": 1440
                          },
                          "start": 1416,
                          "end": 1440
                        }
                      ],
                      "optional": false,
                      "start": 1407,
                      "end": 1441
                    }
                  ],
                  "optional": false,
                  "start": 1398,
                  "end": 1442
                },
                "definite": false,
                "start": 1391,
                "end": 1442
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sinr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1452,
                  "end": 1456
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1459,
                      "end": 1463
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "abs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1464,
                      "end": 1467
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1459,
                    "end": 1467
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1468,
                          "end": 1472
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sin",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1473,
                          "end": 1476
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1468,
                        "end": 1476
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rotation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1477,
                              "end": 1485
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1488,
                                "end": 1492
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PI",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1493,
                                "end": 1495
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1488,
                              "end": 1495
                            },
                            "start": 1477,
                            "end": 1495
                          },
                          "operator": "/",
                          "right": {
                            "type": "Literal",
                            "value": 180,
                            "raw": "180",
                            "start": 1498,
                            "end": 1501
                          },
                          "start": 1477,
                          "end": 1501
                        }
                      ],
                      "optional": false,
                      "start": 1468,
                      "end": 1502
                    }
                  ],
                  "optional": false,
                  "start": 1459,
                  "end": 1503
                },
                "definite": false,
                "start": 1452,
                "end": 1503
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tsize",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1513,
                  "end": 1518
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "taTitleFont",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1521,
                    "end": 1532
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1535,
                        "end": 1536
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "normalizedLength",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1537,
                        "end": 1553
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1535,
                      "end": 1553
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1554,
                              "end": 1555
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "splitFontString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1556,
                              "end": 1571
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1554,
                            "end": 1571
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "taTitleFont",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1572,
                              "end": 1583
                            }
                          ],
                          "optional": false,
                          "start": 1554,
                          "end": 1584
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1585,
                          "end": 1589
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1554,
                        "end": 1589
                      }
                    ],
                    "optional": false,
                    "start": 1535,
                    "end": 1590
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1593,
                    "end": 1594
                  },
                  "start": 1521,
                  "end": 1594
                },
                "definite": false,
                "start": 1513,
                "end": 1594
              }
            ],
            "declare": false,
            "start": 172,
            "end": 1595
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rotation",
                "optional": false,
                "typeAnnotation": null,
                "start": 1604,
                "end": 1612
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1615,
                "end": 1616
              },
              "start": 1604,
              "end": 1616
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rotation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1628,
                      "end": 1636
                    },
                    "right": {
                      "type": "Literal",
                      "value": 360,
                      "raw": "360",
                      "start": 1640,
                      "end": 1643
                    },
                    "start": 1628,
                    "end": 1643
                  },
                  "directive": null,
                  "start": 1628,
                  "end": 1644
                }
              ],
              "start": 1618,
              "end": 1650
            },
            "alternate": null,
            "start": 1600,
            "end": 1650
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cachedLabelW",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1659,
                  "end": 1671
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1674,
                      "end": 1678
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_getMaxLabelSize",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1679,
                      "end": 1695
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1674,
                    "end": 1695
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1674,
                  "end": 1697
                },
                "definite": false,
                "start": 1659,
                "end": 1697
              }
            ],
            "declare": false,
            "start": 1655,
            "end": 1698
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cachedLabelW",
                "optional": false,
                "typeAnnotation": null,
                "start": 1703,
                "end": 1715
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cachedLabelW",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1718,
                  "end": 1730
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cachedLabelW",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1734,
                    "end": 1746
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "majLabelW",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1756
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1734,
                  "end": 1756
                },
                "start": 1718,
                "end": 1756
              },
              "start": 1703,
              "end": 1756
            },
            "directive": null,
            "start": 1703,
            "end": 1757
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "titleOffset",
                "optional": false,
                "typeAnnotation": null,
                "start": 1762,
                "end": 1773
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1776,
                            "end": 1780
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cosr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1783,
                            "end": 1787
                          },
                          "start": 1776,
                          "end": 1787
                        },
                        "operator": "+",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cachedLabelW",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1791,
                              "end": 1803
                            },
                            "operator": "||",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1807,
                              "end": 1808
                            },
                            "start": 1791,
                            "end": 1808
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sinr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1812,
                            "end": 1816
                          },
                          "start": 1790,
                          "end": 1816
                        },
                        "start": 1776,
                        "end": 1816
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelGap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1819,
                        "end": 1827
                      },
                      "start": 1776,
                      "end": 1827
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1830,
                          "end": 1834
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "max",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1835,
                          "end": 1838
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1830,
                        "end": 1838
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "taMajorTick",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1839,
                                "end": 1850
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1851,
                                "end": 1857
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1839,
                              "end": 1857
                            },
                            "operator": ">",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1860,
                              "end": 1861
                            },
                            "start": 1839,
                            "end": 1861
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "taMajorTick",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1864,
                              "end": 1875
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1876,
                              "end": 1882
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1864,
                            "end": 1882
                          },
                          "alternate": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1885,
                            "end": 1886
                          },
                          "start": 1839,
                          "end": 1886
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "taMinorTick",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1896,
                                "end": 1907
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1908,
                                "end": 1914
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1896,
                              "end": 1914
                            },
                            "operator": ">",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1917,
                              "end": 1918
                            },
                            "start": 1896,
                            "end": 1918
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "taMinorTick",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1921,
                              "end": 1932
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1933,
                              "end": 1939
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1921,
                            "end": 1939
                          },
                          "alternate": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1942,
                            "end": 1943
                          },
                          "start": 1896,
                          "end": 1943
                        }
                      ],
                      "optional": false,
                      "start": 1830,
                      "end": 1944
                    },
                    "start": 1776,
                    "end": 1944
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tsize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1955,
                    "end": 1960
                  },
                  "start": 1776,
                  "end": 1960
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleGap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1963,
                  "end": 1973
                },
                "start": 1776,
                "end": 1973
              },
              "start": 1762,
              "end": 1973
            },
            "directive": null,
            "start": 1762,
            "end": 1974
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "axisVector",
                "optional": false,
                "typeAnnotation": null,
                "start": 1979,
                "end": 1989
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1994,
                      "end": 1995
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isRtl",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1997,
                        "end": 2002
                      },
                      "consequent": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2006,
                          "end": 2007
                        },
                        "prefix": true,
                        "start": 2005,
                        "end": 2007
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2010,
                        "end": 2011
                      },
                      "start": 1997,
                      "end": 2011
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1994,
                    "end": 2011
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2013,
                      "end": 2014
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2016,
                      "end": 2017
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2013,
                    "end": 2017
                  }
                ],
                "start": 1992,
                "end": 2019
              },
              "start": 1979,
              "end": 2019
            },
            "directive": null,
            "start": 1979,
            "end": 2020
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "rotation",
              "optional": false,
              "typeAnnotation": null,
              "start": 2056,
              "end": 2064
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rotation",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2101,
                        "end": 2109
                      },
                      "operator": "<",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 90,
                          "raw": "90",
                          "start": 2113,
                          "end": 2115
                        },
                        "operator": "-",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "centerAnchorLimit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2118,
                          "end": 2135
                        },
                        "start": 2113,
                        "end": 2135
                      },
                      "start": 2101,
                      "end": 2136
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "labelOffset",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2156,
                                "end": 2167
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2168,
                                "end": 2169
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2156,
                              "end": 2169
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "leftBottom",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2172,
                                "end": 2182
                              },
                              "consequent": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "size",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2185,
                                "end": 2189
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 2192,
                                "end": 2193
                              },
                              "start": 2172,
                              "end": 2193
                            },
                            "start": 2156,
                            "end": 2193
                          },
                          "directive": null,
                          "start": 2156,
                          "end": 2194
                        }
                      ],
                      "start": 2138,
                      "end": 2208
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rotation",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2218,
                          "end": 2226
                        },
                        "operator": "<",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": 90,
                            "raw": "90",
                            "start": 2230,
                            "end": 2232
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "centerAnchorLimit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2235,
                            "end": 2252
                          },
                          "start": 2230,
                          "end": 2252
                        },
                        "start": 2218,
                        "end": 2253
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "labelOffset",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2273,
                                  "end": 2284
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2285,
                                  "end": 2286
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2273,
                                "end": 2286
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "size",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2290,
                                    "end": 2294
                                  },
                                  "prefix": true,
                                  "start": 2289,
                                  "end": 2294
                                },
                                "operator": "*",
                                "right": {
                                  "type": "Literal",
                                  "value": 0.4,
                                  "raw": "0.4",
                                  "start": 2297,
                                  "end": 2300
                                },
                                "start": 2289,
                                "end": 2300
                              },
                              "start": 2273,
                              "end": 2300
                            },
                            "directive": null,
                            "start": 2273,
                            "end": 2301
                          }
                        ],
                        "start": 2255,
                        "end": 2315
                      },
                      "alternate": {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rotation",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2325,
                            "end": 2333
                          },
                          "operator": "<",
                          "right": {
                            "type": "Literal",
                            "value": 180,
                            "raw": "180",
                            "start": 2336,
                            "end": 2339
                          },
                          "start": 2325,
                          "end": 2339
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "labelOffset",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2359,
                                    "end": 2370
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2371,
                                    "end": 2372
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2359,
                                  "end": 2372
                                },
                                "right": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "leftBottom",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2375,
                                    "end": 2385
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2388,
                                    "end": 2389
                                  },
                                  "alternate": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "size",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2393,
                                      "end": 2397
                                    },
                                    "prefix": true,
                                    "start": 2392,
                                    "end": 2397
                                  },
                                  "start": 2375,
                                  "end": 2397
                                },
                                "start": 2359,
                                "end": 2397
                              },
                              "directive": null,
                              "start": 2359,
                              "end": 2398
                            }
                          ],
                          "start": 2341,
                          "end": 2412
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rotation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2422,
                              "end": 2430
                            },
                            "operator": "<",
                            "right": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Literal",
                                "value": 270,
                                "raw": "270",
                                "start": 2434,
                                "end": 2437
                              },
                              "operator": "-",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "centerAnchorLimit",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2440,
                                "end": 2457
                              },
                              "start": 2434,
                              "end": 2457
                            },
                            "start": 2422,
                            "end": 2458
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "labelOffset",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2478,
                                      "end": 2489
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2490,
                                      "end": 2491
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2478,
                                    "end": 2491
                                  },
                                  "right": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "leftBottom",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2494,
                                      "end": 2504
                                    },
                                    "consequent": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 2507,
                                      "end": 2508
                                    },
                                    "alternate": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "size",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2512,
                                        "end": 2516
                                      },
                                      "prefix": true,
                                      "start": 2511,
                                      "end": 2516
                                    },
                                    "start": 2494,
                                    "end": 2516
                                  },
                                  "start": 2478,
                                  "end": 2516
                                },
                                "directive": null,
                                "start": 2478,
                                "end": 2517
                              }
                            ],
                            "start": 2460,
                            "end": 2531
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rotation",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2541,
                                "end": 2549
                              },
                              "operator": "<",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Literal",
                                  "value": 270,
                                  "raw": "270",
                                  "start": 2553,
                                  "end": 2556
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "centerAnchorLimit",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2559,
                                  "end": 2576
                                },
                                "start": 2553,
                                "end": 2576
                              },
                              "start": 2541,
                              "end": 2577
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "labelOffset",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2597,
                                        "end": 2608
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2609,
                                        "end": 2610
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2597,
                                      "end": 2610
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "leftBottom",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2613,
                                        "end": 2623
                                      },
                                      "consequent": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "size",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2626,
                                          "end": 2630
                                        },
                                        "operator": "*",
                                        "right": {
                                          "type": "Literal",
                                          "value": 0.4,
                                          "raw": "0.4",
                                          "start": 2633,
                                          "end": 2636
                                        },
                                        "start": 2626,
                                        "end": 2636
                                      },
                                      "alternate": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 2639,
                                        "end": 2640
                                      },
                                      "start": 2613,
                                      "end": 2640
                                    },
                                    "start": 2597,
                                    "end": 2640
                                  },
                                  "directive": null,
                                  "start": 2597,
                                  "end": 2641
                                }
                              ],
                              "start": 2579,
                              "end": 2655
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "labelOffset",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2679,
                                        "end": 2690
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2691,
                                        "end": 2692
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2679,
                                      "end": 2692
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "leftBottom",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2695,
                                        "end": 2705
                                      },
                                      "consequent": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "size",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2708,
                                        "end": 2712
                                      },
                                      "alternate": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 2715,
                                        "end": 2716
                                      },
                                      "start": 2695,
                                      "end": 2716
                                    },
                                    "start": 2679,
                                    "end": 2716
                                  },
                                  "directive": null,
                                  "start": 2679,
                                  "end": 2717
                                }
                              ],
                              "start": 2661,
                              "end": 2731
                            },
                            "start": 2537,
                            "end": 2731
                          },
                          "start": 2418,
                          "end": 2731
                        },
                        "start": 2321,
                        "end": 2731
                      },
                      "start": 2214,
                      "end": 2731
                    },
                    "start": 2097,
                    "end": 2731
                  }
                ],
                "start": 2076,
                "end": 2731
              }
            ],
            "start": 2048,
            "end": 2737
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "titleRotation",
                "optional": false,
                "typeAnnotation": null,
                "start": 2743,
                "end": 2756
              },
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "taTitleOrientation",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2760,
                    "end": 2778
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "taTitleOrientation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2782,
                      "end": 2800
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": "away",
                      "raw": "\"away\"",
                      "start": 2804,
                      "end": 2810
                    },
                    "start": 2782,
                    "end": 2810
                  },
                  "start": 2760,
                  "end": 2810
                },
                "consequent": {
                  "type": "Literal",
                  "value": 180,
                  "raw": "180",
                  "start": 2814,
                  "end": 2817
                },
                "alternate": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2820,
                  "end": 2821
                },
                "start": 2759,
                "end": 2821
              },
              "start": 2743,
              "end": 2821
            },
            "directive": null,
            "start": 2743,
            "end": 2822
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "titlePos",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2827,
                  "end": 2835
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2836,
                  "end": 2837
                },
                "optional": false,
                "computed": false,
                "start": 2827,
                "end": 2837
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "offsets",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2840,
                      "end": 2847
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2848,
                      "end": 2849
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2840,
                    "end": 2849
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "titleOffset",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2863
                  },
                  "start": 2840,
                  "end": 2863
                },
                "operator": "+",
                "right": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "titleRotation",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2867,
                    "end": 2880
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2883,
                    "end": 2884
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tsize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2887,
                    "end": 2892
                  },
                  "start": 2867,
                  "end": 2892
                },
                "start": 2840,
                "end": 2893
              },
              "start": 2827,
              "end": 2893
            },
            "directive": null,
            "start": 2827,
            "end": 2894
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "labelAlign",
              "optional": false,
              "typeAnnotation": null,
              "start": 2907,
              "end": 2917
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "start",
                  "raw": "\"start\"",
                  "start": 2934,
                  "end": 2941
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelAlign",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2955,
                        "end": 2965
                      },
                      "right": {
                        "type": "Literal",
                        "value": "end",
                        "raw": "\"end\"",
                        "start": 2968,
                        "end": 2973
                      },
                      "start": 2955,
                      "end": 2973
                    },
                    "directive": null,
                    "start": 2955,
                    "end": 2974
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2987,
                    "end": 2993
                  }
                ],
                "start": 2929,
                "end": 2993
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "end",
                  "raw": "\"end\"",
                  "start": 3007,
                  "end": 3012
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelAlign",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3026,
                        "end": 3036
                      },
                      "right": {
                        "type": "Literal",
                        "value": "start",
                        "raw": "\"start\"",
                        "start": 3039,
                        "end": 3046
                      },
                      "start": 3026,
                      "end": 3046
                    },
                    "directive": null,
                    "start": 3026,
                    "end": 3047
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3060,
                    "end": 3066
                  }
                ],
                "start": 3002,
                "end": 3066
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "middle",
                  "raw": "\"middle\"",
                  "start": 3080,
                  "end": 3088
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "labelOffset",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3102,
                          "end": 3113
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3114,
                          "end": 3115
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3102,
                        "end": 3115
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3119,
                        "end": 3123
                      },
                      "start": 3102,
                      "end": 3123
                    },
                    "directive": null,
                    "start": 3102,
                    "end": 3124
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3137,
                    "end": 3143
                  }
                ],
                "start": 3075,
                "end": 3143
              }
            ],
            "start": 2899,
            "end": 3149
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3159,
                  "end": 3160
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rotation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3163,
                  "end": 3171
                },
                "definite": false,
                "start": 3159,
                "end": 3171
              }
            ],
            "declare": false,
            "start": 3155,
            "end": 3172
          }
        ],
        "start": 91,
        "end": 3174
      },
      "expression": false,
      "start": 20,
      "end": 3174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 3174
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 20,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "dim",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "offsets",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "acommon",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "centerAnchorLimit",
    "start": 59,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "lin",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "isRtl",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "_isRtl",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 190,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 195,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "chart",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "theme",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "axis",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 218,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 231,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "leftBottom",
    "start": 249,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 262,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 271,
    "end": 274
  },
  {
    "type": "String",
    "value": "\"rightOrTop\"",
    "start": 275,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 289,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 302,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "360",
    "start": 313,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "stop",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "titlePos",
    "start": 339,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "titleRotation",
    "start": 349,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "titleOffset",
    "start": 368,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "axisVector",
    "start": 381,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "tickVector",
    "start": 393,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "anchorOffset",
    "start": 405,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "labelOffset",
    "start": 419,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "labelAlign",
    "start": 432,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "labelGap",
    "start": 452,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "chart",
    "start": 468,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "theme",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "axis",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "tick",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "labelGap",
    "start": 490,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "taFont",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "font",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 524,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "majorTick",
    "start": 531,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 541,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "majorTick",
    "start": 547,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "font",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "tick",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 575,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "tick",
    "start": 581,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "font",
    "start": 586,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "taTitleFont",
    "start": 601,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "titleFont",
    "start": 617,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 634,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 640,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 646,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "font",
    "start": 652,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "taFontColor",
    "start": 667,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "fontColor",
    "start": 683,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "majorTick",
    "start": 700,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 710,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "majorTick",
    "start": 716,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "fontColor",
    "start": 726,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 741,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "tick",
    "start": 744,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 749,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "tick",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "fontColor",
    "start": 760,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 771,
    "end": 773
  },
  {
    "type": "String",
    "value": "\"black\"",
    "start": 774,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "taTitleFontColor",
    "start": 791,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "titleFontColor",
    "start": 812,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 827,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 831,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 834,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 840,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 843,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 846,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "fontColor",
    "start": 852,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 863,
    "end": 865
  },
  {
    "type": "String",
    "value": "\"black\"",
    "start": 866,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "taTitleGap",
    "start": 883,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "titleGap",
    "start": 899,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 908,
    "end": 910
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 914,
    "end": 915
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "titleGap",
    "start": 922,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 931,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 935,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 938,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 944,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 947,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 950,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "gap",
    "start": 956,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 961,
    "end": 963
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 964,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "taTitleOrientation",
    "start": 976,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "titleOrientation",
    "start": 999,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1016,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1023,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1029,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "orientation",
    "start": 1041,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "String",
    "value": "\"axis\"",
    "start": 1057,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "taMajorTick",
    "start": 1073,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1087,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "chart",
    "start": 1092,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "theme",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "getTick",
    "start": 1104,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "String",
    "value": "\"major\"",
    "start": 1112,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "taMinorTick",
    "start": 1133,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1147,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "chart",
    "start": 1152,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "theme",
    "start": 1158,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "getTick",
    "start": 1164,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "String",
    "value": "\"minor\"",
    "start": 1172,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "taMicroTick",
    "start": 1193,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "chart",
    "start": 1212,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "theme",
    "start": 1218,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "getTick",
    "start": 1224,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "String",
    "value": "\"micro\"",
    "start": 1232,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "taStroke",
    "start": 1254,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "String",
    "value": "\"stroke\"",
    "start": 1265,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1274,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "stroke",
    "start": 1283,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "ta",
    "start": 1292,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "stroke",
    "start": 1295,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "taFont",
    "start": 1318,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "normalizedLength",
    "start": 1329,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "splitFontString",
    "start": 1348,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "taFont",
    "start": 1364,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1372,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "cosr",
    "start": 1391,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1398,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "abs",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1407,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "cos",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 1416,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1427,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 1432,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Numeric",
    "value": "180",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "sinr",
    "start": 1452,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1459,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "abs",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1468,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "sin",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 1477,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1488,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 1493,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Numeric",
    "value": "180",
    "start": 1498,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "tsize",
    "start": 1513,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "taTitleFont",
    "start": 1521,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "normalizedLength",
    "start": 1537,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "splitFontString",
    "start": 1556,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "taTitleFont",
    "start": 1572,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1585,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1600,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 1604,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 1628,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1637,
    "end": 1639
  },
  {
    "type": "Numeric",
    "value": "360",
    "start": 1640,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1655,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "cachedLabelW",
    "start": 1659,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1674,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "_getMaxLabelSize",
    "start": 1679,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "cachedLabelW",
    "start": 1703,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "cachedLabelW",
    "start": 1718,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1731,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "cachedLabelW",
    "start": 1734,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "majLabelW",
    "start": 1747,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "titleOffset",
    "start": 1762,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1776,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "cosr",
    "start": 1783,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "cachedLabelW",
    "start": 1791,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1804,
    "end": 1806
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "sinr",
    "start": 1812,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "labelGap",
    "start": 1819,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1830,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 1835,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "taMajorTick",
    "start": 1839,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1851,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "taMajorTick",
    "start": 1864,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1876,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "taMinorTick",
    "start": 1896,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1908,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "taMinorTick",
    "start": 1921,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1933,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "tsize",
    "start": 1955,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "taTitleGap",
    "start": 1963,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "axisVector",
    "start": 1979,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "isRtl",
    "start": 1997,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2048,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 2056,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 2076,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2097,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 2101,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Numeric",
    "value": "90",
    "start": 2113,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "centerAnchorLimit",
    "start": 2118,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "labelOffset",
    "start": 2156,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "leftBottom",
    "start": 2172,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 2185,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2209,
    "end": 2213
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2214,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 2218,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Numeric",
    "value": "90",
    "start": 2230,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "centerAnchorLimit",
    "start": 2235,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "labelOffset",
    "start": 2273,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 2290,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Numeric",
    "value": "0.4",
    "start": 2297,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2316,
    "end": 2320
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2321,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 2325,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Numeric",
    "value": "180",
    "start": 2336,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "labelOffset",
    "start": 2359,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "leftBottom",
    "start": 2375,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 2393,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2413,
    "end": 2417
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2418,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 2422,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Numeric",
    "value": "270",
    "start": 2434,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "centerAnchorLimit",
    "start": 2440,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "labelOffset",
    "start": 2478,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "leftBottom",
    "start": 2494,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 2512,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2532,
    "end": 2536
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2537,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 2541,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Numeric",
    "value": "270",
    "start": 2553,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "centerAnchorLimit",
    "start": 2559,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "labelOffset",
    "start": 2597,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "leftBottom",
    "start": 2613,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 2626,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Numeric",
    "value": "0.4",
    "start": 2633,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2656,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "labelOffset",
    "start": 2679,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "leftBottom",
    "start": 2695,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 2708,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "titleRotation",
    "start": 2743,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "taTitleOrientation",
    "start": 2760,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2779,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "taTitleOrientation",
    "start": 2782,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2801,
    "end": 2803
  },
  {
    "type": "String",
    "value": "\"away\"",
    "start": 2804,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Numeric",
    "value": "180",
    "start": 2814,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "titlePos",
    "start": 2827,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "offsets",
    "start": 2840,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "titleOffset",
    "start": 2852,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "titleRotation",
    "start": 2867,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "tsize",
    "start": 2887,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2899,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "labelAlign",
    "start": 2907,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2929,
    "end": 2933
  },
  {
    "type": "String",
    "value": "\"start\"",
    "start": 2934,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "labelAlign",
    "start": 2955,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "String",
    "value": "\"end\"",
    "start": 2968,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2987,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3002,
    "end": 3006
  },
  {
    "type": "String",
    "value": "\"end\"",
    "start": 3007,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "labelAlign",
    "start": 3026,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "String",
    "value": "\"start\"",
    "start": 3039,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3060,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3075,
    "end": 3079
  },
  {
    "type": "String",
    "value": "\"middle\"",
    "start": 3080,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "labelOffset",
    "start": 3102,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 3116,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 3119,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3137,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3155,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 3163,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3173,
    "end": 3174
  }
]
```
