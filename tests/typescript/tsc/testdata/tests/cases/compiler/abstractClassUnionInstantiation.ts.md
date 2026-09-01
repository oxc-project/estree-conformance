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
        "name": "ConcreteA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 16,
        "end": 18
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteB",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 34
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 35,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 19,
      "end": 37
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractA",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 62
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 65,
            "end": 75
          }
        ],
        "start": 63,
        "end": 77
      },
      "abstract": true,
      "declare": false,
      "start": 38,
      "end": 77
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractB",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 102
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              },
              "start": 106,
              "end": 114
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 105,
            "end": 115
          }
        ],
        "start": 103,
        "end": 117
      },
      "abstract": true,
      "declare": false,
      "start": 78,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Abstracts",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 133
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AbstractA",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 152
            },
            "typeArguments": null,
            "start": 136,
            "end": 152
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AbstractB",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 171
            },
            "typeArguments": null,
            "start": 155,
            "end": 171
          }
        ],
        "start": 136,
        "end": 171
      },
      "declare": false,
      "start": 119,
      "end": 172
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Concretes",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 187
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConcreteA",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 206
            },
            "typeArguments": null,
            "start": 190,
            "end": 206
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConcreteB",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 225
            },
            "typeArguments": null,
            "start": 209,
            "end": 225
          }
        ],
        "start": 190,
        "end": 225
      },
      "declare": false,
      "start": 173,
      "end": 226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcretesOrAbstracts",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 252
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Concretes",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 264
            },
            "typeArguments": null,
            "start": 255,
            "end": 264
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Abstracts",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 276
            },
            "typeArguments": null,
            "start": 267,
            "end": 276
          }
        ],
        "start": 255,
        "end": 276
      },
      "declare": false,
      "start": 227,
      "end": 277
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
            "name": "cls1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConcretesOrAbstracts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 319
                },
                "typeArguments": null,
                "start": 299,
                "end": 319
              },
              "start": 297,
              "end": 319
            },
            "start": 293,
            "end": 319
          },
          "init": null,
          "definite": false,
          "start": 293,
          "end": 319
        }
      ],
      "declare": true,
      "start": 279,
      "end": 320
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
            "name": "cls2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Abstracts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 350
                },
                "typeArguments": null,
                "start": 341,
                "end": 350
              },
              "start": 339,
              "end": 350
            },
            "start": 335,
            "end": 350
          },
          "init": null,
          "definite": false,
          "start": 335,
          "end": 350
        }
      ],
      "declare": true,
      "start": 321,
      "end": 351
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
            "name": "cls3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Concretes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 381
                },
                "typeArguments": null,
                "start": 372,
                "end": 381
              },
              "start": 370,
              "end": 381
            },
            "start": 366,
            "end": 381
          },
          "init": null,
          "definite": false,
          "start": 366,
          "end": 381
        }
      ],
      "declare": true,
      "start": 352,
      "end": 382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "cls1",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 392
        },
        "typeArguments": null,
        "arguments": [],
        "start": 384,
        "end": 394
      },
      "directive": null,
      "start": 384,
      "end": 395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "cls2",
          "optional": false,
          "typeAnnotation": null,
          "start": 416,
          "end": 420
        },
        "typeArguments": null,
        "arguments": [],
        "start": 412,
        "end": 422
      },
      "directive": null,
      "start": 412,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "cls3",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 448
        },
        "typeArguments": null,
        "arguments": [],
        "start": 440,
        "end": 450
      },
      "directive": null,
      "start": 440,
      "end": 451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ConcreteA",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 478
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractA",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 489
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractB",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 500
              }
            ],
            "start": 468,
            "end": 501
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 505
          },
          "optional": false,
          "computed": false,
          "start": 468,
          "end": 505
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 509
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 520
              },
              "typeArguments": null,
              "arguments": [],
              "start": 513,
              "end": 522
            },
            "id": null,
            "generator": false,
            "start": 506,
            "end": 522
          }
        ],
        "optional": false,
        "start": 468,
        "end": 523
      },
      "directive": null,
      "start": 468,
      "end": 524
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractA",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 551
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractB",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 562
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ConcreteA",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 573
              }
            ],
            "start": 541,
            "end": 574
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
          },
          "optional": false,
          "computed": false,
          "start": 541,
          "end": 578
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 582
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 593
              },
              "typeArguments": null,
              "arguments": [],
              "start": 586,
              "end": 595
            },
            "id": null,
            "generator": false,
            "start": 579,
            "end": 595
          }
        ],
        "optional": false,
        "start": 541,
        "end": 596
      },
      "directive": null,
      "start": 541,
      "end": 597
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ConcreteA",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 624
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ConcreteB",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 635
              }
            ],
            "start": 614,
            "end": 636
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 637,
            "end": 640
          },
          "optional": false,
          "computed": false,
          "start": 614,
          "end": 640
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 644
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 655
              },
              "typeArguments": null,
              "arguments": [],
              "start": 648,
              "end": 657
            },
            "id": null,
            "generator": false,
            "start": 641,
            "end": 657
          }
        ],
        "optional": false,
        "start": 614,
        "end": 658
      },
      "directive": null,
      "start": 614,
      "end": 659
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractA",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 685
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractB",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 696
              }
            ],
            "start": 675,
            "end": 697
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 701
          },
          "optional": false,
          "computed": false,
          "start": 675,
          "end": 701
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 705
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 716
              },
              "typeArguments": null,
              "arguments": [],
              "start": 709,
              "end": 718
            },
            "id": null,
            "generator": false,
            "start": 702,
            "end": 718
          }
        ],
        "optional": false,
        "start": 675,
        "end": 719
      },
      "directive": null,
      "start": 675,
      "end": 720
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 736
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
    "value": "ConcreteA",
    "start": 6,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "ConcreteB",
    "start": 25,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 38,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "AbstractA",
    "start": 53,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 78,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "AbstractB",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 119,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Abstracts",
    "start": 124,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 136,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "AbstractA",
    "start": 143,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 155,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "AbstractB",
    "start": 162,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 173,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Concretes",
    "start": 178,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "ConcreteA",
    "start": 197,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 209,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "ConcreteB",
    "start": 216,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 227,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "ConcretesOrAbstracts",
    "start": 232,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Concretes",
    "start": 255,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Abstracts",
    "start": 267,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 279,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 287,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "cls1",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "ConcretesOrAbstracts",
    "start": 299,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 321,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "cls2",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Abstracts",
    "start": 341,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 352,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 360,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "cls3",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "Concretes",
    "start": 372,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "cls1",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 412,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "cls2",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 440,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "cls3",
    "start": 444,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "ConcreteA",
    "start": 469,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "AbstractA",
    "start": 480,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "AbstractB",
    "start": 491,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 506,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 510,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 513,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "AbstractA",
    "start": 542,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "AbstractB",
    "start": 553,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "ConcreteA",
    "start": 564,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 575,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 583,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "ConcreteA",
    "start": 615,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "ConcreteB",
    "start": 626,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 637,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 645,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 648,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 652,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
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
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "AbstractA",
    "start": 676,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "AbstractB",
    "start": 687,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 698,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 702,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 706,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 709,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  }
]
```
