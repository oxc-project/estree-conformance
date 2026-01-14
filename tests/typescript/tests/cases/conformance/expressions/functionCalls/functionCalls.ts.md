__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 90,
                "end": 93
              },
              "start": 88,
              "end": 93
            },
            "start": 82,
            "end": 93
          },
          "init": null,
          "definite": false,
          "start": 82,
          "end": 93
        }
      ],
      "declare": true,
      "start": 70,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 101
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 102,
            "end": 103
          }
        ],
        "optional": false,
        "start": 95,
        "end": 104
      },
      "directive": null,
      "start": 95,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 112
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 113,
            "end": 115
          }
        ],
        "optional": false,
        "start": 106,
        "end": 116
      },
      "directive": null,
      "start": 106,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 218
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 219,
              "end": 225
            }
          ],
          "start": 218,
          "end": 226
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "start": 227,
            "end": 234
          }
        ],
        "optional": false,
        "start": 212,
        "end": 235
      },
      "directive": null,
      "start": 212,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 243
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 244,
              "end": 250
            }
          ],
          "start": 243,
          "end": 251
        },
        "arguments": [],
        "optional": false,
        "start": 237,
        "end": 253
      },
      "directive": null,
      "start": 237,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 261
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Window",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 268
              },
              "typeArguments": null,
              "start": 262,
              "end": 268
            }
          ],
          "start": 261,
          "end": 269
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 279
          }
        ],
        "optional": false,
        "start": 255,
        "end": 280
      },
      "directive": null,
      "start": 255,
      "end": 281
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 406
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 423
          },
          "typeArguments": null,
          "start": 415,
          "end": 423
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 434
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 436,
                "end": 442
              },
              "start": 434,
              "end": 442
            },
            "accessibility": null,
            "static": false,
            "start": 430,
            "end": 443
          }
        ],
        "start": 424,
        "end": 445
      },
      "declare": false,
      "start": 389,
      "end": 445
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
            "name": "subFunc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SubFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 474
                },
                "typeArguments": null,
                "start": 467,
                "end": 474
              },
              "start": 465,
              "end": 474
            },
            "start": 458,
            "end": 474
          },
          "init": null,
          "definite": false,
          "start": 458,
          "end": 474
        }
      ],
      "declare": true,
      "start": 446,
      "end": 475
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 483
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 484,
            "end": 485
          }
        ],
        "optional": false,
        "start": 476,
        "end": 486
      },
      "directive": null,
      "start": 476,
      "end": 487
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 488,
          "end": 495
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 496,
            "end": 498
          }
        ],
        "optional": false,
        "start": 488,
        "end": 499
      },
      "directive": null,
      "start": 488,
      "end": 500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 508
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 501,
        "end": 510
      },
      "directive": null,
      "start": 501,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 642,
          "end": 649
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 650,
              "end": 656
            }
          ],
          "start": 649,
          "end": 657
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 658,
            "end": 659
          }
        ],
        "optional": false,
        "start": 642,
        "end": 660
      },
      "directive": null,
      "start": 642,
      "end": 661
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 662,
          "end": 669
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 670,
              "end": 676
            }
          ],
          "start": 669,
          "end": 677
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 678,
            "end": 680
          }
        ],
        "optional": false,
        "start": 662,
        "end": 681
      },
      "directive": null,
      "start": 662,
      "end": 682
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 690
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 691,
              "end": 694
            }
          ],
          "start": 690,
          "end": 695
        },
        "arguments": [],
        "optional": false,
        "start": 683,
        "end": 697
      },
      "directive": null,
      "start": 683,
      "end": 698
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
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 838,
                  "end": 846
                },
                "typeArguments": null,
                "start": 838,
                "end": 846
              },
              "start": 836,
              "end": 846
            },
            "start": 832,
            "end": 846
          },
          "init": null,
          "definite": false,
          "start": 832,
          "end": 846
        }
      ],
      "declare": true,
      "start": 820,
      "end": 847
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 848,
          "end": 852
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 853,
              "end": 859
            }
          ],
          "start": 852,
          "end": 860
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 861,
            "end": 862
          }
        ],
        "optional": false,
        "start": 848,
        "end": 863
      },
      "directive": null,
      "start": 848,
      "end": 864
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 865,
          "end": 869
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 870,
              "end": 876
            }
          ],
          "start": 869,
          "end": 877
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 878,
            "end": 880
          }
        ],
        "optional": false,
        "start": 865,
        "end": 881
      },
      "directive": null,
      "start": 865,
      "end": 882
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 883,
          "end": 887
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 888,
              "end": 891
            }
          ],
          "start": 887,
          "end": 892
        },
        "arguments": [],
        "optional": false,
        "start": 883,
        "end": 894
      },
      "directive": null,
      "start": 883,
      "end": 895
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 70,
  "end": 895
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 70,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "String",
    "value": "''",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 244,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 270,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 389,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "SubFunc",
    "start": 399,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 407,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 415,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 446,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 454,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "subFunc",
    "start": 458,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "SubFunc",
    "start": 467,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "subFunc",
    "start": 476,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "subFunc",
    "start": 488,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "String",
    "value": "''",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "subFunc",
    "start": 501,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "subFunc",
    "start": 642,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "subFunc",
    "start": 662,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 670,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "String",
    "value": "''",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "subFunc",
    "start": 683,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 691,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 820,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 828,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 832,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 838,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 848,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 853,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 865,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 870,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "String",
    "value": "''",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 883,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 888,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  }
]
```
