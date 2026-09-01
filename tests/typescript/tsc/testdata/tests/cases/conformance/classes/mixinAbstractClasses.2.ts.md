__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixinMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 33
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 37,
                "end": 41
              },
              "start": 35,
              "end": 41
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 42
          }
        ],
        "start": 16,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 60
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 71
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 101
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 103,
                      "end": 106
                    },
                    "start": 101,
                    "end": 106
                  },
                  "value": null,
                  "start": 94,
                  "end": 106
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 111,
                  "end": 114
                },
                "start": 108,
                "end": 114
              },
              "start": 80,
              "end": 114
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 114
          }
        ],
        "start": 60,
        "end": 115
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 137
              },
              "typeArguments": null,
              "start": 127,
              "end": 137
            },
            "start": 125,
            "end": 137
          },
          "start": 116,
          "end": 137
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 150
              },
              "typeArguments": null,
              "start": 140,
              "end": 150
            },
            {
              "type": "TSConstructorType",
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 175
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 177,
                      "end": 180
                    },
                    "start": 175,
                    "end": 180
                  },
                  "value": null,
                  "start": 168,
                  "end": 180
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 190
                  },
                  "typeArguments": null,
                  "start": 185,
                  "end": 190
                },
                "start": 182,
                "end": 190
              },
              "start": 154,
              "end": 190
            }
          ],
          "start": 140,
          "end": 191
        },
        "start": 138,
        "end": 191
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 362
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 380
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mixin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 397
                },
                "typeArguments": null,
                "start": 392,
                "end": 397
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mixinMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 408,
                    "end": 419
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
                      "body": [],
                      "start": 422,
                      "end": 433
                    },
                    "expression": false,
                    "start": 419,
                    "end": 433
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 408,
                  "end": 433
                }
              ],
              "start": 398,
              "end": 439
            },
            "abstract": false,
            "declare": false,
            "start": 346,
            "end": 439
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 461
            },
            "start": 444,
            "end": 462
          }
        ],
        "start": 192,
        "end": 464
      },
      "expression": false,
      "start": 46,
      "end": 464
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 493
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "abstractBaseMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 527
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 531,
                  "end": 535
                },
                "start": 529,
                "end": 535
              },
              "body": null,
              "expression": false,
              "start": 527,
              "end": 536
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 500,
            "end": 536
          }
        ],
        "start": 494,
        "end": 538
      },
      "abstract": true,
      "declare": false,
      "start": 466,
      "end": 538
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MixedBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 555
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 563
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 576
              }
            ],
            "optional": false,
            "start": 558,
            "end": 577
          },
          "definite": false,
          "start": 546,
          "end": 577
        }
      ],
      "declare": false,
      "start": 540,
      "end": 578
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedFromAbstract",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 766
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixedBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 775,
        "end": 784
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 785,
        "end": 788
      },
      "abstract": false,
      "declare": false,
      "start": 741,
      "end": 788
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MixedBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 861,
          "end": 870
        },
        "typeArguments": null,
        "arguments": [],
        "start": 857,
        "end": 872
      },
      "directive": null,
      "start": 857,
      "end": 873
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 873
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 22,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 61,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 80,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 108,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 116,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 127,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 140,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 154,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 185,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "MixinClass",
    "start": 352,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 363,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 371,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 381,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 408,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 444,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "MixinClass",
    "start": 451,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 466,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 475,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "AbstractBase",
    "start": 481,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 500,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "abstractBaseMethod",
    "start": 509,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 531,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 540,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "MixedBase",
    "start": 546,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 558,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "AbstractBase",
    "start": 564,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 741,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "DerivedFromAbstract",
    "start": 747,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 767,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "MixedBase",
    "start": 775,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 857,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "MixedBase",
    "start": 861,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  }
]
```
