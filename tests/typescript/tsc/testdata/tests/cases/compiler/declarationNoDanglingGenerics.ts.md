__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "kindCache",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 26,
                            "end": 32
                          },
                          "start": 24,
                          "end": 32
                        },
                        "start": 20,
                        "end": 32
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 35,
                        "end": 42
                      },
                      "start": 33,
                      "end": 42
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 19,
                    "end": 42
                  }
                ],
                "start": 17,
                "end": 44
              },
              "start": 15,
              "end": 44
            },
            "start": 6,
            "end": 44
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 47,
            "end": 49
          },
          "definite": false,
          "start": 6,
          "end": 49
        }
      ],
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "register",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 69
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            },
            "start": 74,
            "end": 82
          },
          "start": 70,
          "end": 82
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSVoidKeyword",
              "start": 85,
              "end": 89
            },
            {
              "type": "TSNeverKeyword",
              "start": 92,
              "end": 97
            }
          ],
          "start": 85,
          "end": 97
        },
        "start": 83,
        "end": 97
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "kindCache",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 120
              },
              "optional": false,
              "computed": true,
              "start": 106,
              "end": 121
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 144
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "Class with kind \"",
                              "cooked": "Class with kind \""
                            },
                            "tail": false,
                            "start": 145,
                            "end": 165
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "\" is already registered.",
                              "cooked": "\" is already registered."
                            },
                            "tail": true,
                            "start": 169,
                            "end": 195
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 169
                          }
                        ],
                        "start": 145,
                        "end": 195
                      }
                    ],
                    "start": 135,
                    "end": 196
                  },
                  "start": 129,
                  "end": 197
                }
              ],
              "start": 123,
              "end": 201
            },
            "alternate": null,
            "start": 102,
            "end": 201
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
                  "name": "kindCache",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 213
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 218
                },
                "optional": false,
                "computed": true,
                "start": 204,
                "end": 219
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 222,
                "end": 226
              },
              "start": 204,
              "end": 226
            },
            "directive": null,
            "start": 204,
            "end": 227
          }
        ],
        "start": 98,
        "end": 229
      },
      "expression": false,
      "start": 52,
      "end": 229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 252
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
              "name": "TKind",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 258
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 267,
              "end": 273
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 253,
            "end": 273
          }
        ],
        "start": 252,
        "end": 274
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TKind",
                "optional": false,
                "typeAnnotation": null,
                "start": 281,
                "end": 286
              },
              "typeArguments": null,
              "start": 281,
              "end": 286
            },
            "start": 279,
            "end": 286
          },
          "start": 275,
          "end": 286
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "register",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 300
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 305
                }
              ],
              "optional": false,
              "start": 292,
              "end": 306
            },
            "directive": null,
            "start": 292,
            "end": 307
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "THE_KIND",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 354
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 356,
                          "end": 361
                        },
                        "typeArguments": null,
                        "start": 356,
                        "end": 361
                      },
                      "start": 354,
                      "end": 361
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 364,
                      "end": 368
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": true,
                    "accessibility": null,
                    "start": 330,
                    "end": 369
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 383,
                      "end": 387
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 389,
                          "end": 394
                        },
                        "typeArguments": null,
                        "start": 389,
                        "end": 394
                      },
                      "start": 387,
                      "end": 394
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 401
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": true,
                    "accessibility": null,
                    "start": 374,
                    "end": 402
                  }
                ],
                "start": 324,
                "end": 406
              },
              "abstract": false,
              "declare": false,
              "start": 318,
              "end": 406
            },
            "start": 311,
            "end": 407
          }
        ],
        "start": 288,
        "end": 409
      },
      "expression": false,
      "start": 231,
      "end": 409
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kinds",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 422
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 447,
              "end": 450
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 427,
            "end": 451
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 471
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 474,
              "end": 477
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 454,
            "end": 478
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 498
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "C",
              "raw": "\"C\"",
              "start": 501,
              "end": 504
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 481,
            "end": 505
          }
        ],
        "start": 423,
        "end": 507
      },
      "abstract": false,
      "declare": false,
      "start": 411,
      "end": 507
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 527
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 548
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 554
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "optional": false,
              "computed": false,
              "start": 549,
              "end": 556
            }
          ],
          "optional": false,
          "start": 536,
          "end": 557
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 558,
          "end": 561
        },
        "abstract": false,
        "declare": false,
        "start": 516,
        "end": 561
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 509,
      "end": 561
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 576,
          "end": 581
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 602
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 610
              },
              "optional": false,
              "computed": false,
              "start": 603,
              "end": 610
            }
          ],
          "optional": false,
          "start": 590,
          "end": 611
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 612,
          "end": 615
        },
        "abstract": false,
        "declare": false,
        "start": 570,
        "end": 615
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 563,
      "end": 615
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 630,
          "end": 635
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 656
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 662
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 664
              },
              "optional": false,
              "computed": false,
              "start": 657,
              "end": 664
            }
          ],
          "optional": false,
          "start": 644,
          "end": 665
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 666,
          "end": 669
        },
        "abstract": false,
        "declare": false,
        "start": 624,
        "end": 669
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 617,
      "end": 669
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 669
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "kindCache",
    "start": 6,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 52,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "register",
    "start": 61,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 85,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "kindCache",
    "start": 106,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 129,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Template",
    "value": "`Class with kind \"${",
    "start": 145,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 165,
    "end": 169
  },
  {
    "type": "Template",
    "value": "}\" is already registered.`",
    "start": 169,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "kindCache",
    "start": 204,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 231,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "ClassFactory",
    "start": 240,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "TKind",
    "start": 253,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 259,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "TKind",
    "start": 281,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "register",
    "start": 292,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 311,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 318,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 330,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 337,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "THE_KIND",
    "start": 346,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "TKind",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 374,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "TKind",
    "start": 389,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 411,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "Kinds",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 427,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 434,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 454,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 461,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 481,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 488,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 509,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 516,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "AKind",
    "start": 522,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 528,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "ClassFactory",
    "start": 536,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Kinds",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "export",
    "start": 563,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 570,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "BKind",
    "start": 576,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 582,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "ClassFactory",
    "start": 590,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "Kinds",
    "start": 603,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 617,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 624,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "CKind",
    "start": 630,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 636,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "ClassFactory",
    "start": 644,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "Kinds",
    "start": 657,
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
    "value": "C",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  }
]
```
