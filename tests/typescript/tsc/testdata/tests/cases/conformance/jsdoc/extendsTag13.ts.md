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
        "start": 25,
        "end": 26
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 72
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 78
                }
              ],
              "returnType": null,
              "body": {
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
                          "type": "ThisExpression",
                          "start": 90,
                          "end": 94
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 100
                        },
                        "optional": false,
                        "computed": false,
                        "start": 90,
                        "end": 100
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 108
                      },
                      "start": 90,
                      "end": 108
                    },
                    "directive": null,
                    "start": 90,
                    "end": 109
                  }
                ],
                "start": 80,
                "end": 115
              },
              "expression": false,
              "start": 72,
              "end": 115
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 61,
            "end": 115
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
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
                      "type": "ThisExpression",
                      "start": 185,
                      "end": 189
                    },
                    "start": 178,
                    "end": 190
                  }
                ],
                "start": 168,
                "end": 196
              },
              "expression": false,
              "start": 165,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 152,
            "end": 196
          }
        ],
        "start": 27,
        "end": 198
      },
      "abstract": false,
      "declare": false,
      "start": 19,
      "end": 198
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 230
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 276
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
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 282
                }
              ],
              "returnType": null,
              "body": {
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
                          "type": "ThisExpression",
                          "start": 294,
                          "end": 298
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 299,
                          "end": 304
                        },
                        "optional": false,
                        "computed": false,
                        "start": 294,
                        "end": 304
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 307,
                        "end": 312
                      },
                      "start": 294,
                      "end": 312
                    },
                    "directive": null,
                    "start": 294,
                    "end": 313
                  }
                ],
                "start": 284,
                "end": 319
              },
              "expression": false,
              "start": 276,
              "end": 319
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 265,
            "end": 319
          }
        ],
        "start": 231,
        "end": 321
      },
      "abstract": false,
      "declare": false,
      "start": 219,
      "end": 321
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 331
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 337
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 337
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 336,
                "end": 337
              }
            ],
            "start": 334,
            "end": 339
          },
          "definite": false,
          "start": 329,
          "end": 339
        }
      ],
      "declare": false,
      "start": 323,
      "end": 340
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Direct",
        "optional": false,
        "typeAnnotation": null,
        "start": 408,
        "end": 414
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 424
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 425,
        "end": 427
      },
      "abstract": false,
      "declare": false,
      "start": 402,
      "end": 427
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Call",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 528
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 538
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 545
          },
          "optional": false,
          "computed": false,
          "start": 537,
          "end": 545
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 537,
        "end": 547
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 548,
        "end": 550
      },
      "abstract": false,
      "declare": false,
      "start": 518,
      "end": 550
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SeparateDirect",
        "optional": false,
        "typeAnnotation": null,
        "start": 646,
        "end": 660
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 669,
        "end": 670
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 671,
        "end": 673
      },
      "abstract": false,
      "declare": false,
      "start": 640,
      "end": 673
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SeparateElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 742,
        "end": 757
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 768
        },
        "property": {
          "type": "Literal",
          "value": "A",
          "raw": "\"A\"",
          "start": 769,
          "end": 772
        },
        "optional": false,
        "computed": true,
        "start": 766,
        "end": 773
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 774,
        "end": 776
      },
      "abstract": false,
      "declare": false,
      "start": 736,
      "end": 776
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FirstMismatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 844,
        "end": 857
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 867
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 874
          },
          "optional": false,
          "computed": false,
          "start": 866,
          "end": 874
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 866,
        "end": 876
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 877,
        "end": 879
      },
      "abstract": false,
      "declare": false,
      "start": 838,
      "end": 879
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CompatibleTags",
        "optional": false,
        "typeAnnotation": null,
        "start": 944,
        "end": 958
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 967,
            "end": 968
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null,
            "start": 969,
            "end": 975
          },
          "optional": false,
          "computed": false,
          "start": 967,
          "end": 975
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 967,
        "end": 977
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 978,
        "end": 980
      },
      "abstract": false,
      "declare": false,
      "start": 938,
      "end": 980
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
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1009,
            "end": 1014
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "CompatibleTags",
                "optional": false,
                "typeAnnotation": null,
                "start": 1021,
                "end": 1035
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 1036,
                  "end": 1040
                }
              ],
              "start": 1017,
              "end": 1041
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1047
            },
            "optional": false,
            "computed": false,
            "start": 1017,
            "end": 1047
          },
          "definite": false,
          "start": 1009,
          "end": 1047
        }
      ],
      "declare": false,
      "start": 1003,
      "end": 1048
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1048
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 61,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 152,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 159,
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
    "type": "Keyword",
    "value": "this",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 219,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 265,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 277,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 402,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "Direct",
    "start": 408,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 415,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 518,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "Call",
    "start": 524,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 529,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 640,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "SeparateDirect",
    "start": 646,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 661,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 736,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "SeparateElement",
    "start": 742,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 758,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 768,
    "end": 769
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 769,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 838,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "FirstMismatch",
    "start": 844,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 858,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 868,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 938,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "CompatibleTags",
    "start": 944,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 959,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 969,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1003,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1009,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "CompatibleTags",
    "start": 1021,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1036,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1042,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  }
]
```
