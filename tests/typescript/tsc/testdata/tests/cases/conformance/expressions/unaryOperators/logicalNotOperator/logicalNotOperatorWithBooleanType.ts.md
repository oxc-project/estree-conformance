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
                "start": 51,
                "end": 58
              },
              "start": 49,
              "end": 58
            },
            "start": 42,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 42,
          "end": 58
        }
      ],
      "declare": true,
      "start": 30,
      "end": 59
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 73
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
          "start": 77,
          "end": 84
        },
        "start": 75,
        "end": 84
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
              "start": 94,
              "end": 98
            },
            "start": 87,
            "end": 99
          }
        ],
        "start": 85,
        "end": 101
      },
      "expression": false,
      "start": 61,
      "end": 101
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
        "start": 109,
        "end": 110
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
              "start": 124,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 128,
                "end": 135
              },
              "start": 126,
              "end": 135
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "public",
            "start": 117,
            "end": 136
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
              "start": 148,
              "end": 151
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
                      "start": 163,
                      "end": 168
                    },
                    "start": 156,
                    "end": 169
                  }
                ],
                "start": 154,
                "end": 171
              },
              "expression": false,
              "start": 151,
              "end": 171
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 141,
            "end": 171
          }
        ],
        "start": 111,
        "end": 173
      },
      "abstract": false,
      "declare": false,
      "start": 103,
      "end": 173
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 185
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
                        "start": 214,
                        "end": 221
                      },
                      "start": 212,
                      "end": 221
                    },
                    "start": 211,
                    "end": 221
                  },
                  "init": null,
                  "definite": false,
                  "start": 211,
                  "end": 221
                }
              ],
              "declare": true,
              "start": 199,
              "end": 222
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 192,
            "end": 222
          }
        ],
        "start": 186,
        "end": 224
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 174,
      "end": 224
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
            "start": 230,
            "end": 234
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 242
            },
            "typeArguments": null,
            "arguments": [],
            "start": 237,
            "end": 244
          },
          "definite": false,
          "start": 230,
          "end": 244
        }
      ],
      "declare": false,
      "start": 226,
      "end": 245
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 287
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 298
            },
            "prefix": true,
            "start": 290,
            "end": 298
          },
          "definite": false,
          "start": 271,
          "end": 298
        }
      ],
      "declare": false,
      "start": 267,
      "end": 299
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 345
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 349,
              "end": 353
            },
            "prefix": true,
            "start": 348,
            "end": 353
          },
          "definite": false,
          "start": 329,
          "end": 353
        }
      ],
      "declare": false,
      "start": 325,
      "end": 354
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 375
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                    "start": 381,
                    "end": 382
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 384,
                    "end": 388
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 381,
                  "end": 388
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
                    "start": 390,
                    "end": 391
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 393,
                    "end": 398
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 390,
                  "end": 398
                }
              ],
              "start": 379,
              "end": 400
            },
            "prefix": true,
            "start": 378,
            "end": 400
          },
          "definite": false,
          "start": 359,
          "end": 400
        }
      ],
      "declare": false,
      "start": 355,
      "end": 401
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 451
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 459
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 461
              },
              "optional": false,
              "computed": false,
              "start": 455,
              "end": 461
            },
            "prefix": true,
            "start": 454,
            "end": 461
          },
          "definite": false,
          "start": 435,
          "end": 461
        }
      ],
      "declare": false,
      "start": 431,
      "end": 462
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 483
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "optional": false,
              "computed": false,
              "start": 487,
              "end": 490
            },
            "prefix": true,
            "start": 486,
            "end": 490
          },
          "definite": false,
          "start": 467,
          "end": 490
        }
      ],
      "declare": false,
      "start": 463,
      "end": 491
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 512
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 519
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 516,
              "end": 521
            },
            "prefix": true,
            "start": 515,
            "end": 521
          },
          "definite": false,
          "start": 496,
          "end": 521
        }
      ],
      "declare": false,
      "start": 492,
      "end": 522
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 543
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                  "start": 547,
                  "end": 548
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 552
                },
                "optional": false,
                "computed": false,
                "start": 547,
                "end": 552
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 547,
              "end": 554
            },
            "prefix": true,
            "start": 546,
            "end": 554
          },
          "definite": false,
          "start": 527,
          "end": 554
        }
      ],
      "declare": false,
      "start": 523,
      "end": 555
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
            "name": "ResultIsBoolean",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 600
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 612
              },
              "prefix": true,
              "start": 604,
              "end": 612
            },
            "prefix": true,
            "start": 603,
            "end": 612
          },
          "definite": false,
          "start": 585,
          "end": 612
        }
      ],
      "declare": false,
      "start": 581,
      "end": 613
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 645,
          "end": 649
        },
        "prefix": true,
        "start": 644,
        "end": 649
      },
      "directive": null,
      "start": 644,
      "end": 650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 659
        },
        "prefix": true,
        "start": 651,
        "end": 659
      },
      "directive": null,
      "start": 651,
      "end": 660
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 665
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 662,
          "end": 667
        },
        "prefix": true,
        "start": 661,
        "end": 667
      },
      "directive": null,
      "start": 661,
      "end": 668
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 670,
              "end": 674
            },
            "prefix": true,
            "start": 669,
            "end": 674
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 676,
            "end": 681
          }
        ],
        "start": 669,
        "end": 681
      },
      "directive": null,
      "start": 669,
      "end": 682
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 688
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 689,
            "end": 690
          },
          "optional": false,
          "computed": false,
          "start": 684,
          "end": 690
        },
        "prefix": true,
        "start": 683,
        "end": 690
      },
      "directive": null,
      "start": 683,
      "end": 691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 694
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 696
          },
          "optional": false,
          "computed": false,
          "start": 693,
          "end": 696
        },
        "prefix": true,
        "start": 692,
        "end": 696
      },
      "directive": null,
      "start": 692,
      "end": 697
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 697
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 30,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 87,
    "end": 93
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 117,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 141,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 156,
    "end": 162
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 174,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 192,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 199,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 226,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 267,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean1",
    "start": 271,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean2",
    "start": 329,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 348,
    "end": 349
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean3",
    "start": 359,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 431,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean4",
    "start": 435,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean5",
    "start": 467,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean6",
    "start": 496,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean7",
    "start": 527,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean",
    "start": 585,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 605,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 644,
    "end": 645
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 645,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 652,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 669,
    "end": 670
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 676,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 684,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  }
]
```
