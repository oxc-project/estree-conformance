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
        "name": "Base5",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 21
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
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
                      "value": "BaseX",
                      "raw": "\"BaseX\"",
                      "start": 56,
                      "end": 63
                    },
                    "start": 49,
                    "end": 64
                  }
                ],
                "start": 39,
                "end": 70
              },
              "expression": false,
              "start": 36,
              "end": 70
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 28,
            "end": 70
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
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
                      "value": "BaseY",
                      "raw": "\"BaseY\"",
                      "start": 108,
                      "end": 115
                    },
                    "start": 101,
                    "end": 116
                  }
                ],
                "start": 91,
                "end": 122
              },
              "expression": false,
              "start": 88,
              "end": 122
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 80,
            "end": 122
          }
        ],
        "start": 22,
        "end": 124
      },
      "abstract": false,
      "declare": false,
      "start": 10,
      "end": 124
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub5",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 136
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base5",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 150
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
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
                      "value": "SubX",
                      "raw": "\"SubX\"",
                      "start": 185,
                      "end": 191
                    },
                    "start": 178,
                    "end": 192
                  }
                ],
                "start": 168,
                "end": 198
              },
              "expression": false,
              "start": 165,
              "end": 198
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 157,
            "end": 198
          }
        ],
        "start": 151,
        "end": 200
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 200
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubSub5",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 215
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub5",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 228
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 243
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 263,
                          "end": 268
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 270
                        },
                        "optional": false,
                        "computed": false,
                        "start": 263,
                        "end": 270
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 263,
                      "end": 272
                    },
                    "start": 256,
                    "end": 273
                  }
                ],
                "start": 246,
                "end": 279
              },
              "expression": false,
              "start": 243,
              "end": 279
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 235,
            "end": 279
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 312,
                          "end": 317
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 318,
                          "end": 319
                        },
                        "optional": false,
                        "computed": false,
                        "start": 312,
                        "end": 319
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 312,
                      "end": 321
                    },
                    "start": 305,
                    "end": 322
                  }
                ],
                "start": 295,
                "end": 328
              },
              "expression": false,
              "start": 292,
              "end": 328
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 284,
            "end": 328
          }
        ],
        "start": 229,
        "end": 330
      },
      "abstract": false,
      "declare": false,
      "start": 202,
      "end": 330
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base6",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 353
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
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
                      "value": "BaseX",
                      "raw": "\"BaseX\"",
                      "start": 388,
                      "end": 395
                    },
                    "start": 381,
                    "end": 396
                  }
                ],
                "start": 371,
                "end": 402
              },
              "expression": false,
              "start": 368,
              "end": 402
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 360,
            "end": 402
          }
        ],
        "start": 354,
        "end": 404
      },
      "abstract": false,
      "declare": false,
      "start": 342,
      "end": 404
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub6",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 416
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base6",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 430
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 445
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
                      "value": "SubY",
                      "raw": "\"SubY\"",
                      "start": 465,
                      "end": 471
                    },
                    "start": 458,
                    "end": 472
                  }
                ],
                "start": 448,
                "end": 478
              },
              "expression": false,
              "start": 445,
              "end": 478
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 437,
            "end": 478
          }
        ],
        "start": 431,
        "end": 480
      },
      "abstract": false,
      "declare": false,
      "start": 406,
      "end": 480
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubSub6",
        "optional": false,
        "typeAnnotation": null,
        "start": 488,
        "end": 495
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub6",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 508
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 523
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 543,
                          "end": 548
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 549,
                          "end": 550
                        },
                        "optional": false,
                        "computed": false,
                        "start": 543,
                        "end": 550
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 543,
                      "end": 552
                    },
                    "start": 536,
                    "end": 553
                  }
                ],
                "start": 526,
                "end": 559
              },
              "expression": false,
              "start": 523,
              "end": 559
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 515,
            "end": 559
          }
        ],
        "start": 509,
        "end": 561
      },
      "abstract": false,
      "declare": false,
      "start": 482,
      "end": 561
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
            "name": "results1",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 576
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubSub5",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 590
            },
            "typeArguments": null,
            "arguments": [],
            "start": 579,
            "end": 592
          },
          "definite": false,
          "start": 568,
          "end": 592
        }
      ],
      "declare": false,
      "start": 564,
      "end": 593
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
            "name": "results2",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 606
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubSub6",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 620
            },
            "typeArguments": null,
            "arguments": [],
            "start": 609,
            "end": 622
          },
          "definite": false,
          "start": 598,
          "end": 622
        }
      ],
      "declare": false,
      "start": 594,
      "end": 623
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "results1",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 634
              },
              "optional": false,
              "computed": false,
              "start": 624,
              "end": 634
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 624,
            "end": 636
          },
          "operator": "+",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "results1",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 647
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 649
              },
              "optional": false,
              "computed": false,
              "start": 639,
              "end": 649
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 639,
            "end": 651
          },
          "start": 624,
          "end": 651
        },
        "operator": "+",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "results2",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 662
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 664
            },
            "optional": false,
            "computed": false,
            "start": 654,
            "end": 664
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 654,
          "end": 666
        },
        "start": 624,
        "end": 666
      },
      "directive": null,
      "start": 624,
      "end": 667
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 667
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 10,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Base5",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 28,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 49,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"BaseX\"",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 80,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
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
    "value": "return",
    "start": 101,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"BaseY\"",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 126,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Sub5",
    "start": 132,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Base5",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 157,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 178,
    "end": 184
  },
  {
    "type": "String",
    "value": "\"SubX\"",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "SubSub5",
    "start": 208,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 216,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Sub5",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 235,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 256,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 284,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 305,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 312,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 342,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "Base6",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 360,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 381,
    "end": 387
  },
  {
    "type": "String",
    "value": "\"BaseX\"",
    "start": 388,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 406,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "Sub6",
    "start": 412,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 417,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Base6",
    "start": 425,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 437,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 458,
    "end": 464
  },
  {
    "type": "String",
    "value": "\"SubY\"",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 482,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "SubSub6",
    "start": 488,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 496,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "Sub6",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 515,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 536,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 543,
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
    "value": "y",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "results1",
    "start": 568,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 579,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "SubSub5",
    "start": 583,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "results2",
    "start": 598,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "SubSub6",
    "start": 613,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "results1",
    "start": 624,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "results1",
    "start": 639,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "results2",
    "start": 654,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  }
]
```
