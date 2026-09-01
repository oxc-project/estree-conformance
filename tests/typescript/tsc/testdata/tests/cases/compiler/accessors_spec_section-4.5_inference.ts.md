__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 30,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 12,
      "end": 33
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LanguageSpec_section_4_5_inference",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 75
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredGetterFromSetterAnnotation",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 128
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 133
                      },
                      "typeArguments": null,
                      "start": 132,
                      "end": 133
                    },
                    "start": 130,
                    "end": 133
                  },
                  "start": 129,
                  "end": 133
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 135,
                "end": 138
              },
              "expression": false,
              "start": 128,
              "end": 138
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 83,
            "end": 138
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredGetterFromSetterAnnotation",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 188
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 205
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 200,
                      "end": 207
                    },
                    "start": 193,
                    "end": 208
                  }
                ],
                "start": 191,
                "end": 210
              },
              "expression": false,
              "start": 188,
              "end": 210
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 143,
            "end": 210
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredGetterFromSetterAnnotation_GetterFirst",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 273
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 289,
                        "end": 290
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 285,
                      "end": 292
                    },
                    "start": 278,
                    "end": 293
                  }
                ],
                "start": 276,
                "end": 295
              },
              "expression": false,
              "start": 273,
              "end": 295
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 216,
            "end": 295
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredGetterFromSetterAnnotation_GetterFirst",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 357
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 362
                      },
                      "typeArguments": null,
                      "start": 361,
                      "end": 362
                    },
                    "start": 359,
                    "end": 362
                  },
                  "start": 358,
                  "end": 362
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 364,
                "end": 367
              },
              "expression": false,
              "start": 357,
              "end": 367
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 300,
            "end": 367
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredFromGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 407
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 424
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 419,
                      "end": 426
                    },
                    "start": 412,
                    "end": 427
                  }
                ],
                "start": 410,
                "end": 429
              },
              "expression": false,
              "start": 407,
              "end": 429
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 378,
            "end": 429
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredFromGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 463
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 465
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 467,
                "end": 470
              },
              "expression": false,
              "start": 463,
              "end": 470
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 434,
            "end": 470
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredFromGetter_SetterFirst",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 517
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 519
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 521,
                "end": 524
              },
              "expression": false,
              "start": 517,
              "end": 524
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 476,
            "end": 524
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredFromGetter_SetterFirst",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 570
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 587
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 582,
                      "end": 589
                    },
                    "start": 575,
                    "end": 590
                  }
                ],
                "start": 573,
                "end": 592
              },
              "expression": false,
              "start": 570,
              "end": 592
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 529,
            "end": 592
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredSetterFromGetterAnnotation",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 643
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 645
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 647,
                "end": 650
              },
              "expression": false,
              "start": 643,
              "end": 650
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 598,
            "end": 650
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredSetterFromGetterAnnotation",
              "optional": false,
              "typeAnnotation": null,
              "start": 666,
              "end": 700
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 706
                  },
                  "typeArguments": null,
                  "start": 705,
                  "end": 706
                },
                "start": 703,
                "end": 706
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 721
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 716,
                      "end": 723
                    },
                    "start": 709,
                    "end": 724
                  }
                ],
                "start": 707,
                "end": 726
              },
              "expression": false,
              "start": 700,
              "end": 726
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 655,
            "end": 726
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredSetterFromGetterAnnotation_GetterFirst",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 789
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 794,
                    "end": 795
                  },
                  "typeArguments": null,
                  "start": 794,
                  "end": 795
                },
                "start": 792,
                "end": 795
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 809,
                        "end": 810
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 805,
                      "end": 812
                    },
                    "start": 798,
                    "end": 813
                  }
                ],
                "start": 796,
                "end": 815
              },
              "expression": false,
              "start": 789,
              "end": 815
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 732,
            "end": 815
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredSetterFromGetterAnnotation_GetterFirst",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 877
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 879
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 881,
                "end": 884
              },
              "expression": false,
              "start": 877,
              "end": 884
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 820,
            "end": 884
          }
        ],
        "start": 76,
        "end": 886
      },
      "abstract": false,
      "declare": false,
      "start": 35,
      "end": 886
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 886
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 12,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 20,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "LanguageSpec_section_4_5_inference",
    "start": 41,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 83,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "InferredGetterFromSetterAnnotation",
    "start": 94,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 143,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "InferredGetterFromSetterAnnotation",
    "start": 154,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 193,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 216,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "InferredGetterFromSetterAnnotation_GetterFirst",
    "start": 227,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 278,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 285,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 300,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "InferredGetterFromSetterAnnotation_GetterFirst",
    "start": 311,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 378,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "InferredFromGetter",
    "start": 389,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 412,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 419,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 434,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "InferredFromGetter",
    "start": 445,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 476,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 483,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "InferredFromGetter_SetterFirst",
    "start": 487,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 529,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 536,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "InferredFromGetter_SetterFirst",
    "start": 540,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 575,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 582,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 598,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 605,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "InferredSetterFromGetterAnnotation",
    "start": 609,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 655,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 662,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "InferredSetterFromGetterAnnotation",
    "start": 666,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 709,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 716,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 732,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 739,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "InferredSetterFromGetterAnnotation_GetterFirst",
    "start": 743,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 798,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 805,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 820,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 827,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "InferredSetterFromGetterAnnotation_GetterFirst",
    "start": 831,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  }
]
```
