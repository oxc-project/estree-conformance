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
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 43,
                "end": 50
              },
              "start": 41,
              "end": 50
            },
            "start": 34,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 50
        }
      ],
      "declare": false,
      "start": 30,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 69,
          "end": 76
        },
        "start": 67,
        "end": 76
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 86,
              "end": 90
            },
            "start": 79,
            "end": 91
          }
        ],
        "start": 77,
        "end": 93
      },
      "expression": false,
      "start": 53,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 119,
                "end": 126
              },
              "start": 117,
              "end": 126
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 109,
            "end": 127
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 142
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
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 154,
                      "end": 159
                    },
                    "start": 147,
                    "end": 160
                  }
                ],
                "start": 145,
                "end": 162
              },
              "expression": false,
              "start": 142,
              "end": 162
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 132,
            "end": 162
          }
        ],
        "start": 103,
        "end": 164
      },
      "abstract": false,
      "declare": false,
      "start": 95,
      "end": 164
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 176
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 197,
                        "end": 204
                      },
                      "start": 195,
                      "end": 204
                    },
                    "start": 194,
                    "end": 204
                  },
                  "init": null,
                  "definite": false,
                  "start": 194,
                  "end": 204
                }
              ],
              "declare": false,
              "start": 190,
              "end": 205
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 183,
            "end": 205
          }
        ],
        "start": 177,
        "end": 207
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 165,
      "end": 207
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 217
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 225
            },
            "typeArguments": null,
            "arguments": [],
            "start": 220,
            "end": 227
          },
          "definite": false,
          "start": 213,
          "end": 227
        }
      ],
      "declare": false,
      "start": 209,
      "end": 228
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 269
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 280
            },
            "prefix": true,
            "start": 272,
            "end": 280
          },
          "definite": false,
          "start": 254,
          "end": 280
        }
      ],
      "declare": false,
      "start": 250,
      "end": 281
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 326
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 330,
              "end": 334
            },
            "prefix": true,
            "start": 329,
            "end": 334
          },
          "definite": false,
          "start": 311,
          "end": 334
        }
      ],
      "declare": false,
      "start": 307,
      "end": 335
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 355
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
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
                    "start": 361,
                    "end": 362
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 364,
                    "end": 368
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 361,
                  "end": 368
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
                    "start": 370,
                    "end": 371
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 373,
                    "end": 378
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 370,
                  "end": 378
                }
              ],
              "start": 359,
              "end": 380
            },
            "prefix": true,
            "start": 358,
            "end": 380
          },
          "definite": false,
          "start": 340,
          "end": 380
        }
      ],
      "declare": false,
      "start": 336,
      "end": 381
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
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 430
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 438
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 439,
                "end": 440
              },
              "optional": false,
              "computed": false,
              "start": 434,
              "end": 440
            },
            "prefix": true,
            "start": 433,
            "end": 440
          },
          "definite": false,
          "start": 415,
          "end": 440
        }
      ],
      "declare": false,
      "start": 411,
      "end": 441
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
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 461
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 466
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "optional": false,
              "computed": false,
              "start": 465,
              "end": 468
            },
            "prefix": true,
            "start": 464,
            "end": 468
          },
          "definite": false,
          "start": 446,
          "end": 468
        }
      ],
      "declare": false,
      "start": 442,
      "end": 469
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
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 489
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 496
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 493,
              "end": 498
            },
            "prefix": true,
            "start": 492,
            "end": 498
          },
          "definite": false,
          "start": 474,
          "end": 498
        }
      ],
      "declare": false,
      "start": 470,
      "end": 499
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 519
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 524
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 528
                },
                "optional": false,
                "computed": false,
                "start": 523,
                "end": 528
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 523,
              "end": 530
            },
            "prefix": true,
            "start": 522,
            "end": 530
          },
          "definite": false,
          "start": 504,
          "end": 530
        }
      ],
      "declare": false,
      "start": 500,
      "end": 531
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
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 576
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 588
              },
              "prefix": true,
              "start": 580,
              "end": 588
            },
            "prefix": true,
            "start": 579,
            "end": 588
          },
          "definite": false,
          "start": 561,
          "end": 588
        }
      ],
      "declare": false,
      "start": 557,
      "end": 589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 621,
          "end": 625
        },
        "prefix": true,
        "start": 620,
        "end": 625
      },
      "directive": null,
      "start": 620,
      "end": 626
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null,
          "start": 628,
          "end": 635
        },
        "prefix": true,
        "start": 627,
        "end": 635
      },
      "directive": null,
      "start": 627,
      "end": 636
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 641
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 638,
          "end": 643
        },
        "prefix": true,
        "start": 637,
        "end": 643
      },
      "directive": null,
      "start": 637,
      "end": 644
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 646,
              "end": 650
            },
            "prefix": true,
            "start": 645,
            "end": 650
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 652,
            "end": 657
          }
        ],
        "start": 645,
        "end": 657
      },
      "directive": null,
      "start": 645,
      "end": 658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 664
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 666
          },
          "optional": false,
          "computed": false,
          "start": 660,
          "end": 666
        },
        "prefix": true,
        "start": 659,
        "end": 666
      },
      "directive": null,
      "start": 659,
      "end": 667
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 670
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 672
          },
          "optional": false,
          "computed": false,
          "start": 669,
          "end": 672
        },
        "prefix": true,
        "start": 668,
        "end": 672
      },
      "directive": null,
      "start": 668,
      "end": 673
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 673
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 43,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 53,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 79,
    "end": 85
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 109,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 132,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 147,
    "end": 153
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 165,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 183,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 220,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 250,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber1",
    "start": 254,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 273,
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
    "value": "var",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber2",
    "start": 311,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 329,
    "end": 330
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 336,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber3",
    "start": 340,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber4",
    "start": 415,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 442,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber5",
    "start": 446,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber6",
    "start": 474,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 493,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber7",
    "start": 504,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 525,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber8",
    "start": 561,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 581,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 620,
    "end": 621
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 645,
    "end": 646
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 650,
    "end": 651
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 652,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  }
]
```
