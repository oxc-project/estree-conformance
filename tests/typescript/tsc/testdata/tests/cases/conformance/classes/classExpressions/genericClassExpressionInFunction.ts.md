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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
      },
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
              "name": "genericVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 30
                },
                "typeArguments": null,
                "start": 29,
                "end": 30
              },
              "start": 27,
              "end": 30
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
            "start": 17,
            "end": 30
          }
        ],
        "start": 11,
        "end": 32
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 44
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 45,
            "end": 46
          }
        ],
        "start": 44,
        "end": 47
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 112
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "typeArguments": null,
                    "start": 113,
                    "end": 114
                  }
                ],
                "start": 112,
                "end": 115
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 116,
                "end": 119
              },
              "abstract": false,
              "declare": false,
              "start": 97,
              "end": 119
            },
            "start": 90,
            "end": 119
          }
        ],
        "start": 50,
        "end": 121
      },
      "expression": false,
      "start": 33,
      "end": 121
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 130
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 131,
            "end": 132
          }
        ],
        "start": 130,
        "end": 133
      },
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
              "name": "anon",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 144
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "typeArguments": null,
                    "start": 163,
                    "end": 164
                  }
                ],
                "start": 162,
                "end": 165
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 166,
                "end": 169
              },
              "abstract": false,
              "declare": false,
              "start": 147,
              "end": 169
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 140,
            "end": 169
          }
        ],
        "start": 134,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 122,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 183
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
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 185
          }
        ],
        "start": 183,
        "end": 186
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 213
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TInner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 220
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 214,
                    "end": 220
                  }
                ],
                "start": 213,
                "end": 221
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 231
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "W",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 233
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 233
                  }
                ],
                "start": 231,
                "end": 234
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 235,
                "end": 238
              },
              "abstract": false,
              "declare": false,
              "start": 202,
              "end": 238
            },
            "start": 195,
            "end": 238
          }
        ],
        "start": 189,
        "end": 240
      },
      "expression": false,
      "start": 172,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 270
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B1",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 281
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 282,
              "end": 288
            }
          ],
          "start": 281,
          "end": 289
        },
        "arguments": [],
        "optional": false,
        "start": 279,
        "end": 291
      },
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
              "name": "namae",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 303
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
              },
              "start": 303,
              "end": 311
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
            "start": 298,
            "end": 312
          }
        ],
        "start": 292,
        "end": 314
      },
      "abstract": false,
      "declare": false,
      "start": 263,
      "end": 314
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 322
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "B2",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 338
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 339,
                "end": 345
              }
            ],
            "start": 338,
            "end": 346
          },
          "arguments": [],
          "start": 332,
          "end": 348
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "anon",
          "optional": false,
          "typeAnnotation": null,
          "start": 349,
          "end": 353
        },
        "optional": false,
        "computed": false,
        "start": 332,
        "end": 353
      },
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 365
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 367,
                "end": 373
              },
              "start": 365,
              "end": 373
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
            "start": 361,
            "end": 374
          }
        ],
        "start": 355,
        "end": 376
      },
      "abstract": false,
      "declare": false,
      "start": 315,
      "end": 376
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
            "name": "b3Number",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 394
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 395,
                  "end": 401
                }
              ],
              "start": 394,
              "end": 402
            },
            "arguments": [],
            "optional": false,
            "start": 392,
            "end": 404
          },
          "definite": false,
          "start": 381,
          "end": 404
        }
      ],
      "declare": false,
      "start": 377,
      "end": 405
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 413
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "b3Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 430
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 431,
            "end": 437
          }
        ],
        "start": 430,
        "end": 438
      },
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
              "name": "nom",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 448
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 450,
                "end": 456
              },
              "start": 448,
              "end": 456
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
            "start": 445,
            "end": 457
          }
        ],
        "start": 439,
        "end": 459
      },
      "abstract": false,
      "declare": false,
      "start": 406,
      "end": 459
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 465
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 473
            },
            "typeArguments": null,
            "arguments": [],
            "start": 468,
            "end": 475
          },
          "definite": false,
          "start": 464,
          "end": 475
        }
      ],
      "declare": false,
      "start": 460,
      "end": 476
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 482
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "typeArguments": null,
            "arguments": [],
            "start": 485,
            "end": 492
          },
          "definite": false,
          "start": 481,
          "end": 492
        }
      ],
      "declare": false,
      "start": 477,
      "end": 493
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 499
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 507
            },
            "typeArguments": null,
            "arguments": [],
            "start": 502,
            "end": 509
          },
          "definite": false,
          "start": 498,
          "end": 509
        }
      ],
      "declare": false,
      "start": 494,
      "end": 510
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 512
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 523
          },
          "optional": false,
          "computed": false,
          "start": 511,
          "end": 523
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 526,
          "end": 528
        },
        "start": 511,
        "end": 528
      },
      "directive": null,
      "start": 511,
      "end": 529
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 531
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 542
          },
          "optional": false,
          "computed": false,
          "start": 530,
          "end": 542
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 545,
          "end": 547
        },
        "start": 530,
        "end": 547
      },
      "directive": null,
      "start": 530,
      "end": 548
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 550
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 561
          },
          "optional": false,
          "computed": false,
          "start": 549,
          "end": 561
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 564,
          "end": 566
        },
        "start": 549,
        "end": 566
      },
      "directive": null,
      "start": 549,
      "end": 567
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 567
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
    "value": "<",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "genericVar",
    "start": 17,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 33,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 90,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 97,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 103,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 113,
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
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "anon",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 147,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 153,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "function",
    "start": 172,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 195,
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
    "value": "Inner",
    "start": 208,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "TInner",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 222,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 263,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 271,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "namae",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 315,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 323,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "anon",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 377,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "b3Number",
    "start": 381,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 406,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 414,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "b3Number",
    "start": 422,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "nom",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "genericVar",
    "start": 513,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "genericVar",
    "start": 532,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 545,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "genericVar",
    "start": 551,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 564,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  }
]
```
