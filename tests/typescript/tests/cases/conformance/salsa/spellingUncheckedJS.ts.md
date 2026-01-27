__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
              "name": "inModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 19
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 22,
              "end": 23
            },
            "definite": false,
            "start": 11,
            "end": 23
          }
        ],
        "declare": false,
        "start": 7,
        "end": 23
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "inmodule",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 32
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 40
          },
          "optional": false,
          "computed": false,
          "start": 24,
          "end": 40
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 24,
        "end": 42
      },
      "directive": null,
      "start": 24,
      "end": 42
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "locals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 73
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 76,
                    "end": 77
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 80,
                    "end": 84
                  },
                  "start": 76,
                  "end": 84
                },
                "definite": false,
                "start": 67,
                "end": 84
              }
            ],
            "declare": false,
            "start": 63,
            "end": 84
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "locale",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 95
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 103
                },
                "optional": false,
                "computed": false,
                "start": 89,
                "end": 103
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 89,
              "end": 105
            },
            "directive": null,
            "start": 89,
            "end": 105
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "localf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 140
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 154
                },
                "optional": false,
                "computed": false,
                "start": 134,
                "end": 154
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 134,
              "end": 156
            },
            "directive": null,
            "start": 134,
            "end": 156
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "this is fine",
              "raw": "\"this is fine\"",
              "start": 185,
              "end": 199
            },
            "directive": null,
            "start": 185,
            "end": 199
          }
        ],
        "start": 57,
        "end": 201
      },
      "expression": false,
      "start": 44,
      "end": 201
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Classe",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 214
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
              "name": "non",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 224
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "oui",
              "raw": "'oui'",
              "start": 227,
              "end": 232
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 221,
            "end": 232
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methode",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 244
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 305,
                        "end": 309
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "none",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 314
                      },
                      "optional": false,
                      "computed": false,
                      "start": 305,
                      "end": 314
                    },
                    "start": 298,
                    "end": 314
                  }
                ],
                "start": 247,
                "end": 320
              },
              "expression": false,
              "start": 244,
              "end": 320
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 237,
            "end": 320
          }
        ],
        "start": 215,
        "end": 322
      },
      "abstract": false,
      "declare": false,
      "start": 202,
      "end": 322
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derivee",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 336
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Classe",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 351
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
              "name": "methode",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 365
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 427,
                        "end": 432
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "none",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 433,
                        "end": 437
                      },
                      "optional": false,
                      "computed": false,
                      "start": 427,
                      "end": 437
                    },
                    "start": 420,
                    "end": 437
                  }
                ],
                "start": 368,
                "end": 443
              },
              "expression": false,
              "start": 365,
              "end": 443
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 358,
            "end": 443
          }
        ],
        "start": 352,
        "end": 445
      },
      "abstract": false,
      "declare": false,
      "start": 323,
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
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 458
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
                  "name": "spaaace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 474
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 476,
                  "end": 477
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 467,
                "end": 477
              }
            ],
            "start": 461,
            "end": 479
          },
          "definite": false,
          "start": 452,
          "end": 479
        }
      ],
      "declare": false,
      "start": 448,
      "end": 479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": null,
          "start": 480,
          "end": 486
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "spaaaace",
          "optional": false,
          "typeAnnotation": null,
          "start": 487,
          "end": 495
        },
        "optional": false,
        "computed": false,
        "start": 480,
        "end": 495
      },
      "directive": null,
      "start": 480,
      "end": 495
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
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 519
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "spaace",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 526
          },
          "optional": false,
          "computed": false,
          "start": 513,
          "end": 526
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 529,
          "end": 531
        },
        "start": 513,
        "end": 531
      },
      "directive": null,
      "start": 513,
      "end": 531
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
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 556
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fresh",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 562
          },
          "optional": false,
          "computed": false,
          "start": 550,
          "end": 562
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 565,
          "end": 567
        },
        "start": 550,
        "end": 567
      },
      "directive": null,
      "start": 550,
      "end": 567
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "other",
          "optional": false,
          "typeAnnotation": null,
          "start": 574,
          "end": 579
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "puuuce",
          "optional": false,
          "typeAnnotation": null,
          "start": 580,
          "end": 586
        },
        "optional": false,
        "computed": false,
        "start": 574,
        "end": 586
      },
      "directive": null,
      "start": 574,
      "end": 586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 620
            },
            "typeArguments": null,
            "arguments": [],
            "start": 612,
            "end": 622
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getGMTDate",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 633
          },
          "optional": false,
          "computed": false,
          "start": 612,
          "end": 633
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 612,
        "end": 635
      },
      "directive": null,
      "start": 612,
      "end": 635
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
            "name": "atoc",
            "optional": false,
            "typeAnnotation": null,
            "start": 715,
            "end": 719
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "setIntegral",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 733
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 747
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 751
                    },
                    "optional": false,
                    "computed": false,
                    "start": 740,
                    "end": 751
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "ok",
                      "raw": "'ok'",
                      "start": 752,
                      "end": 756
                    }
                  ],
                  "optional": false,
                  "start": 740,
                  "end": 757
                },
                "id": null,
                "generator": false,
                "start": 734,
                "end": 757
              },
              {
                "type": "Literal",
                "value": 500,
                "raw": "500",
                "start": 759,
                "end": 762
              }
            ],
            "optional": false,
            "start": 722,
            "end": 763
          },
          "definite": false,
          "start": 715,
          "end": 763
        }
      ],
      "declare": false,
      "start": 709,
      "end": 763
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "AudioBuffin",
        "optional": false,
        "typeAnnotation": null,
        "start": 764,
        "end": 775
      },
      "directive": null,
      "start": 764,
      "end": 775
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Jimmy",
        "optional": false,
        "typeAnnotation": null,
        "start": 783,
        "end": 788
      },
      "directive": null,
      "start": 783,
      "end": 788
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Jon",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 792
      },
      "directive": null,
      "start": 789,
      "end": 792
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 793
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "inModule",
    "start": 11,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "inmodule",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 33,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 44,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "locals",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 78,
    "end": 79
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 80,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "localf",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 141,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "\"this is fine\"",
    "start": 185,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Classe",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "non",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "String",
    "value": "'oui'",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "methode",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 298,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "none",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "Derivee",
    "start": 329,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 337,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Classe",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "methode",
    "start": 358,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 420,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "none",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "var",
    "start": 448,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "spaaace",
    "start": 467,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "spaaaace",
    "start": 487,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "spaace",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 529,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 550,
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
    "value": "fresh",
    "start": 557,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 565,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 574,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "puuuce",
    "start": 580,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 616,
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
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "getGMTDate",
    "start": 623,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 709,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "atoc",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "setIntegral",
    "start": 722,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
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
    "value": "=>",
    "start": 737,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 740,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 748,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 757,
    "end": 758
  },
  {
    "type": "Numeric",
    "value": "500",
    "start": 759,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "AudioBuffin",
    "start": 764,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "Jimmy",
    "start": 783,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "Jon",
    "start": 789,
    "end": 792
  }
]
```
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
            "name": "Jimmy",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 12,
            "end": 13
          },
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "John",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 22
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 25,
            "end": 26
          },
          "definite": false,
          "start": 18,
          "end": 26
        }
      ],
      "declare": false,
      "start": 14,
      "end": 26
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Jon",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 30
      },
      "directive": null,
      "start": 27,
      "end": 30
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
            "name": "other",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 74
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
                  "name": "puuce",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 88
                },
                "value": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 90,
                  "end": 91
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 83,
                "end": 91
              }
            ],
            "start": 77,
            "end": 93
          },
          "definite": false,
          "start": 69,
          "end": 93
        }
      ],
      "declare": false,
      "start": 65,
      "end": 93
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 93
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "Jimmy",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 14,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "John",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Jon",
    "start": 27,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 65,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "puuce",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  }
]
```
