__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 20
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 21,
          "end": 23
        },
        "abstract": false,
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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 44
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 45,
          "end": 47
        },
        "declare": false,
        "start": 31,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 24,
      "end": 47
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 88,
                "end": 95
              },
              "declare": false,
              "start": 79,
              "end": 96
            }
          ],
          "start": 77,
          "end": 98
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 55,
        "end": 98
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 48,
      "end": 98
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 120
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 121,
          "end": 123
        },
        "const": true,
        "declare": false,
        "start": 106,
        "end": 123
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 99,
      "end": 123
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 145,
          "end": 147
        },
        "abstract": false,
        "declare": false,
        "start": 139,
        "end": 147
      },
      "exportKind": "value",
      "start": 124,
      "end": 147
    },
    {
      "type": "EmptyStatement",
      "start": 147,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 13,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 24,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 31,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 48,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 55,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 63,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 73,
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
    "value": "type",
    "start": 79,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 99,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 106,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 112,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 131,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
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
        "start": 57,
        "end": 58
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                                "name": "Reflect",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 121,
                                "end": 128
                              },
                              "init": null,
                              "definite": false,
                              "start": 121,
                              "end": 128
                            }
                          ],
                          "declare": false,
                          "start": 117,
                          "end": 129
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 176,
                                "end": 181
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 182,
                                "end": 183
                              },
                              "optional": false,
                              "computed": false,
                              "start": 176,
                              "end": 183
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 176,
                            "end": 185
                          },
                          "directive": null,
                          "start": 176,
                          "end": 186
                        }
                      ],
                      "start": 103,
                      "end": 196
                    },
                    "id": null,
                    "generator": false,
                    "start": 97,
                    "end": 196
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 96,
                  "end": 199
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                                "type": "ObjectPattern",
                                "decorators": [],
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Reflect",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 236,
                                      "end": 243
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Reflect",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 236,
                                      "end": 243
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false,
                                    "start": 236,
                                    "end": 243
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 234,
                                "end": 245
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
                                      "name": "Reflect",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 250,
                                      "end": 257
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 259,
                                      "end": 263
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 250,
                                    "end": 263
                                  }
                                ],
                                "start": 248,
                                "end": 265
                              },
                              "definite": false,
                              "start": 234,
                              "end": 265
                            }
                          ],
                          "declare": false,
                          "start": 230,
                          "end": 266
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 313,
                                "end": 318
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 319,
                                "end": 320
                              },
                              "optional": false,
                              "computed": false,
                              "start": 313,
                              "end": 320
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 313,
                            "end": 322
                          },
                          "directive": null,
                          "start": 313,
                          "end": 323
                        }
                      ],
                      "start": 216,
                      "end": 333
                    },
                    "id": null,
                    "generator": false,
                    "start": 210,
                    "end": 333
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 209,
                  "end": 336
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                                "type": "ArrayPattern",
                                "decorators": [],
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Reflect",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 372,
                                    "end": 379
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 371,
                                "end": 380
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 384,
                                    "end": 388
                                  }
                                ],
                                "start": 383,
                                "end": 389
                              },
                              "definite": false,
                              "start": 371,
                              "end": 389
                            }
                          ],
                          "declare": false,
                          "start": 367,
                          "end": 390
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 437,
                                "end": 442
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 443,
                                "end": 444
                              },
                              "optional": false,
                              "computed": false,
                              "start": 437,
                              "end": 444
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 437,
                            "end": 446
                          },
                          "directive": null,
                          "start": 437,
                          "end": 447
                        }
                      ],
                      "start": 353,
                      "end": 457
                    },
                    "id": null,
                    "generator": false,
                    "start": 347,
                    "end": 457
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 346,
                  "end": 460
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 497,
                            "end": 504
                          },
                          "typeParameters": null,
                          "superClass": null,
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "body": [],
                            "start": 505,
                            "end": 507
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 491,
                          "end": 507
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 554,
                                "end": 559
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 560,
                                "end": 561
                              },
                              "optional": false,
                              "computed": false,
                              "start": 554,
                              "end": 561
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 554,
                            "end": 563
                          },
                          "directive": null,
                          "start": 554,
                          "end": 564
                        }
                      ],
                      "start": 477,
                      "end": 574
                    },
                    "id": null,
                    "generator": false,
                    "start": 471,
                    "end": 574
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 470,
                  "end": 577
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 617,
                            "end": 624
                          },
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 627,
                            "end": 629
                          },
                          "expression": false,
                          "start": 608,
                          "end": 629
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 676,
                                "end": 681
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 682,
                                "end": 683
                              },
                              "optional": false,
                              "computed": false,
                              "start": 676,
                              "end": 683
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 676,
                            "end": 685
                          },
                          "directive": null,
                          "start": 676,
                          "end": 686
                        }
                      ],
                      "start": 594,
                      "end": 696
                    },
                    "id": null,
                    "generator": false,
                    "start": 588,
                    "end": 696
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 587,
                  "end": 699
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSEnumDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 735,
                            "end": 742
                          },
                          "body": {
                            "type": "TSEnumBody",
                            "members": [],
                            "start": 743,
                            "end": 745
                          },
                          "const": false,
                          "declare": false,
                          "start": 730,
                          "end": 745
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 792,
                                "end": 797
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 798,
                                "end": 799
                              },
                              "optional": false,
                              "computed": false,
                              "start": 792,
                              "end": 799
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 792,
                            "end": 801
                          },
                          "directive": null,
                          "start": 792,
                          "end": 802
                        }
                      ],
                      "start": 716,
                      "end": 812
                    },
                    "id": null,
                    "generator": false,
                    "start": 710,
                    "end": 812
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 709,
                  "end": 815
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSEnumDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 857,
                            "end": 864
                          },
                          "body": {
                            "type": "TSEnumBody",
                            "members": [],
                            "start": 865,
                            "end": 867
                          },
                          "const": true,
                          "declare": false,
                          "start": 846,
                          "end": 867
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 914,
                                "end": 919
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 920,
                                "end": 921
                              },
                              "optional": false,
                              "computed": false,
                              "start": 914,
                              "end": 921
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 914,
                            "end": 923
                          },
                          "directive": null,
                          "start": 914,
                          "end": 924
                        }
                      ],
                      "start": 832,
                      "end": 934
                    },
                    "id": null,
                    "generator": false,
                    "start": 826,
                    "end": 934
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 825,
                  "end": 937
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSTypeAliasDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 973,
                            "end": 980
                          },
                          "typeParameters": null,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 983,
                            "end": 990
                          },
                          "declare": false,
                          "start": 968,
                          "end": 991
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1020,
                                "end": 1025
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1026,
                                "end": 1027
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1020,
                              "end": 1027
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1020,
                            "end": 1029
                          },
                          "directive": null,
                          "start": 1020,
                          "end": 1030
                        }
                      ],
                      "start": 954,
                      "end": 1040
                    },
                    "id": null,
                    "generator": false,
                    "start": 948,
                    "end": 1040
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 947,
                  "end": 1043
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSInterfaceDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1084,
                            "end": 1091
                          },
                          "typeParameters": null,
                          "extends": [],
                          "body": {
                            "type": "TSInterfaceBody",
                            "body": [],
                            "start": 1092,
                            "end": 1094
                          },
                          "declare": false,
                          "start": 1074,
                          "end": 1094
                        },
                        {
                          "type": "EmptyStatement",
                          "start": 1094,
                          "end": 1095
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1124,
                                "end": 1129
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1130,
                                "end": 1131
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1124,
                              "end": 1131
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1124,
                            "end": 1133
                          },
                          "directive": null,
                          "start": 1124,
                          "end": 1134
                        }
                      ],
                      "start": 1060,
                      "end": 1144
                    },
                    "id": null,
                    "generator": false,
                    "start": 1054,
                    "end": 1144
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1053,
                  "end": 1147
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "ClassExpression",
                            "decorators": [],
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Reflect",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1185,
                              "end": 1192
                            },
                            "typeParameters": null,
                            "superClass": null,
                            "superTypeArguments": null,
                            "implements": [],
                            "body": {
                              "type": "ClassBody",
                              "body": [],
                              "start": 1193,
                              "end": 1195
                            },
                            "abstract": false,
                            "declare": false,
                            "start": 1179,
                            "end": 1195
                          },
                          "directive": null,
                          "start": 1178,
                          "end": 1197
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1226,
                                "end": 1231
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1232,
                                "end": 1233
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1226,
                              "end": 1233
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1226,
                            "end": 1235
                          },
                          "directive": null,
                          "start": 1226,
                          "end": 1236
                        }
                      ],
                      "start": 1164,
                      "end": 1246
                    },
                    "id": null,
                    "generator": false,
                    "start": 1158,
                    "end": 1246
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1157,
                  "end": 1249
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "FunctionExpression",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Reflect",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1290,
                              "end": 1297
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 1300,
                              "end": 1302
                            },
                            "expression": false,
                            "start": 1281,
                            "end": 1302
                          },
                          "directive": null,
                          "start": 1280,
                          "end": 1304
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1333,
                                "end": 1338
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1339,
                                "end": 1340
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1333,
                              "end": 1340
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1333,
                            "end": 1342
                          },
                          "directive": null,
                          "start": 1333,
                          "end": 1343
                        }
                      ],
                      "start": 1266,
                      "end": 1353
                    },
                    "id": null,
                    "generator": false,
                    "start": 1260,
                    "end": 1353
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1259,
                  "end": 1356
                }
              ],
              "start": 86,
              "end": 1363
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 75,
            "end": 1364
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1393,
                            "end": 1400
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1393,
                            "end": 1400
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1393,
                          "end": 1400
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1391,
                      "end": 1402
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
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1407,
                            "end": 1414
                          },
                          "value": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1416,
                            "end": 1420
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1407,
                          "end": 1420
                        }
                      ],
                      "start": 1405,
                      "end": 1422
                    },
                    "definite": false,
                    "start": 1391,
                    "end": 1422
                  }
                ],
                "declare": false,
                "start": 1387,
                "end": 1423
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1466,
                      "end": 1471
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1472,
                      "end": 1473
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1466,
                    "end": 1473
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1466,
                  "end": 1475
                },
                "directive": null,
                "start": 1466,
                "end": 1476
              }
            ],
            "start": 1370,
            "end": 1482
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Reflect",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1510,
                          "end": 1517
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1509,
                      "end": 1518
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 1522,
                          "end": 1526
                        }
                      ],
                      "start": 1521,
                      "end": 1527
                    },
                    "definite": false,
                    "start": 1509,
                    "end": 1527
                  }
                ],
                "declare": false,
                "start": 1505,
                "end": 1528
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1571,
                      "end": 1576
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1577,
                      "end": 1578
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1571,
                    "end": 1578
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1571,
                  "end": 1580
                },
                "directive": null,
                "start": 1571,
                "end": 1581
              }
            ],
            "start": 1488,
            "end": 1587
          },
          {
            "type": "StaticBlock",
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
                      "name": "Reflect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1614,
                      "end": 1621
                    },
                    "init": null,
                    "definite": false,
                    "start": 1614,
                    "end": 1621
                  }
                ],
                "declare": false,
                "start": 1610,
                "end": 1622
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1665,
                      "end": 1670
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1671,
                      "end": 1672
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1665,
                    "end": 1672
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1665,
                  "end": 1674
                },
                "directive": null,
                "start": 1665,
                "end": 1675
              }
            ],
            "start": 1593,
            "end": 1681
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1710,
                  "end": 1717
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 1718,
                  "end": 1720
                },
                "abstract": false,
                "declare": false,
                "start": 1704,
                "end": 1720
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1763,
                      "end": 1768
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1769,
                      "end": 1770
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1763,
                    "end": 1770
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1763,
                  "end": 1772
                },
                "directive": null,
                "start": 1763,
                "end": 1773
              }
            ],
            "start": 1687,
            "end": 1779
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1811,
                  "end": 1818
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1821,
                  "end": 1823
                },
                "expression": false,
                "start": 1802,
                "end": 1823
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1866,
                      "end": 1871
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1872,
                      "end": 1873
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1866,
                    "end": 1873
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1866,
                  "end": 1875
                },
                "directive": null,
                "start": 1866,
                "end": 1876
              }
            ],
            "start": 1785,
            "end": 1882
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1910,
                  "end": 1917
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [],
                  "start": 1918,
                  "end": 1920
                },
                "const": false,
                "declare": false,
                "start": 1905,
                "end": 1920
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1963,
                      "end": 1968
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1969,
                      "end": 1970
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1963,
                    "end": 1970
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1963,
                  "end": 1972
                },
                "directive": null,
                "start": 1963,
                "end": 1973
              }
            ],
            "start": 1888,
            "end": 1979
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2020
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [],
                  "start": 2021,
                  "end": 2023
                },
                "const": true,
                "declare": false,
                "start": 2002,
                "end": 2023
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2066,
                      "end": 2071
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2072,
                      "end": 2073
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2066,
                    "end": 2073
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2066,
                  "end": 2075
                },
                "directive": null,
                "start": 2066,
                "end": 2076
              }
            ],
            "start": 1985,
            "end": 2082
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2110,
                  "end": 2117
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 2120,
                  "end": 2127
                },
                "declare": false,
                "start": 2105,
                "end": 2128
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2153,
                      "end": 2158
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2159,
                      "end": 2160
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2153,
                    "end": 2160
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2153,
                  "end": 2162
                },
                "directive": null,
                "start": 2153,
                "end": 2163
              }
            ],
            "start": 2088,
            "end": 2169
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2202,
                  "end": 2209
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 2210,
                  "end": 2212
                },
                "declare": false,
                "start": 2192,
                "end": 2212
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2237,
                      "end": 2242
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2243,
                      "end": 2244
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2237,
                    "end": 2244
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2237,
                  "end": 2246
                },
                "directive": null,
                "start": 2237,
                "end": 2247
              }
            ],
            "start": 2175,
            "end": 2253
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Reflect",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2283,
                    "end": 2290
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 2291,
                    "end": 2293
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 2277,
                  "end": 2293
                },
                "directive": null,
                "start": 2276,
                "end": 2294
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2319,
                      "end": 2324
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2325,
                      "end": 2326
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2319,
                    "end": 2326
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2319,
                  "end": 2328
                },
                "directive": null,
                "start": 2319,
                "end": 2329
              }
            ],
            "start": 2259,
            "end": 2335
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Reflect",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2368,
                    "end": 2375
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 2378,
                    "end": 2380
                  },
                  "expression": false,
                  "start": 2359,
                  "end": 2380
                },
                "directive": null,
                "start": 2358,
                "end": 2381
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2406,
                      "end": 2411
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2412,
                      "end": 2413
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2406,
                    "end": 2413
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2406,
                  "end": 2415
                },
                "directive": null,
                "start": 2406,
                "end": 2416
              }
            ],
            "start": 2341,
            "end": 2422
          }
        ],
        "start": 69,
        "end": 2424
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 2424
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2425
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 59,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 75,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 100,
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
    "value": "var",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 121,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 176,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 236,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Null",
    "value": "null",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 372,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 383,
    "end": 384
  },
  {
    "type": "Null",
    "value": "null",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 437,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 491,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 497,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 554,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
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
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 591,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 608,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 617,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 676,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 730,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 735,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 792,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 846,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 852,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 857,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 914,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 951,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 968,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 973,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 983,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1020,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1039,
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
    "value": "(",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1057,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1074,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1084,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1124,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1161,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1179,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1185,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1226,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1263,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1281,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1290,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1333,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1370,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1387,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1393,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1407,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1416,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1466,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1488,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1510,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1522,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1571,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1593,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1610,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1614,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1665,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1687,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1704,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1710,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1763,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1785,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1802,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1811,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1866,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1888,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1905,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 1910,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1963,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1985,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2002,
    "end": 2007
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2008,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 2013,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2066,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2088,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2105,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 2110,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2120,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2153,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2175,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2192,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 2202,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2237,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2259,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2277,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 2283,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2319,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2341,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2359,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 2368,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2406,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2423,
    "end": 2424
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
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
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 65,
            "end": 69
          },
          "definite": false,
          "start": 55,
          "end": 69
        }
      ],
      "declare": false,
      "start": 51,
      "end": 70
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
        "start": 111,
        "end": 112
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 122
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 137
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 140,
                  "end": 145
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 147
                },
                "optional": false,
                "computed": false,
                "start": 140,
                "end": 147
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 140,
              "end": 149
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 129,
            "end": 150
          }
        ],
        "start": 123,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 152
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 153
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Null",
    "value": "null",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 113,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "static",
    "start": 129,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 57,
                "end": 64
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 66
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
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 78
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 80,
                  "end": 84
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 71,
                "end": 84
              }
            ],
            "start": 69,
            "end": 86
          },
          "definite": false,
          "start": 55,
          "end": 86
        }
      ],
      "declare": false,
      "start": 51,
      "end": 87
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
        "start": 128,
        "end": 129
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 139
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 157,
                  "end": 162
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 157,
                "end": 164
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 157,
              "end": 166
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 146,
            "end": 167
          }
        ],
        "start": 140,
        "end": 169
      },
      "abstract": false,
      "declare": false,
      "start": 122,
      "end": 169
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Null",
    "value": "null",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 130,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 146,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 63
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 64
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 68,
                "end": 72
              }
            ],
            "start": 67,
            "end": 73
          },
          "definite": false,
          "start": 55,
          "end": 73
        }
      ],
      "declare": false,
      "start": 51,
      "end": 74
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
        "start": 115,
        "end": 116
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 144,
                  "end": 149
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 151
                },
                "optional": false,
                "computed": false,
                "start": 144,
                "end": 151
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 144,
              "end": 153
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 133,
            "end": 154
          }
        ],
        "start": 127,
        "end": 156
      },
      "abstract": false,
      "declare": false,
      "start": 109,
      "end": 156
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 157
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 67,
    "end": 68
  },
  {
    "type": "Null",
    "value": "null",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 117,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 133,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 144,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 150,
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
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
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
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 65,
            "end": 69
          },
          "definite": false,
          "start": 55,
          "end": 69
        }
      ],
      "declare": false,
      "start": 51,
      "end": 70
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
        "start": 111,
        "end": 112
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 122
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 138,
                      "end": 143
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 145
                    },
                    "optional": false,
                    "computed": false,
                    "start": 138,
                    "end": 145
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 138,
                  "end": 147
                },
                "directive": null,
                "start": 138,
                "end": 148
              }
            ],
            "start": 129,
            "end": 150
          }
        ],
        "start": 123,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 152
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 153
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Null",
    "value": "null",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 113,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "static",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 57,
                "end": 64
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 66
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
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 78
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 80,
                  "end": 84
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 71,
                "end": 84
              }
            ],
            "start": 69,
            "end": 86
          },
          "definite": false,
          "start": 55,
          "end": 86
        }
      ],
      "declare": false,
      "start": 51,
      "end": 87
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
        "start": 128,
        "end": 129
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 139
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 155,
                      "end": 160
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 162
                    },
                    "optional": false,
                    "computed": false,
                    "start": 155,
                    "end": 162
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 155,
                  "end": 164
                },
                "directive": null,
                "start": 155,
                "end": 165
              }
            ],
            "start": 146,
            "end": 167
          }
        ],
        "start": 140,
        "end": 169
      },
      "abstract": false,
      "declare": false,
      "start": 122,
      "end": 169
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Null",
    "value": "null",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 130,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 63
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 64
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 68,
                "end": 72
              }
            ],
            "start": 67,
            "end": 73
          },
          "definite": false,
          "start": 55,
          "end": 73
        }
      ],
      "declare": false,
      "start": 51,
      "end": 74
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
        "start": 115,
        "end": 116
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 142,
                      "end": 147
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 149
                    },
                    "optional": false,
                    "computed": false,
                    "start": 142,
                    "end": 149
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 142,
                  "end": 151
                },
                "directive": null,
                "start": 142,
                "end": 152
              }
            ],
            "start": 133,
            "end": 154
          }
        ],
        "start": 127,
        "end": 156
      },
      "abstract": false,
      "declare": false,
      "start": 109,
      "end": 156
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 157
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 67,
    "end": 68
  },
  {
    "type": "Null",
    "value": "null",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 117,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 64
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 65,
        "end": 67
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 67
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
        "start": 108,
        "end": 109
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 119
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 137,
                  "end": 142
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "optional": false,
                "computed": false,
                "start": 137,
                "end": 144
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 137,
              "end": 146
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 126,
            "end": 147
          }
        ],
        "start": 120,
        "end": 149
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 150
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 110,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 64
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 65,
        "end": 67
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 67
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
        "start": 108,
        "end": 109
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 119
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 135,
                      "end": 140
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "optional": false,
                    "computed": false,
                    "start": 135,
                    "end": 142
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 135,
                  "end": 144
                },
                "directive": null,
                "start": 135,
                "end": 145
              }
            ],
            "start": 126,
            "end": 147
          }
        ],
        "start": 120,
        "end": 149
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 150
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 110,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 135,
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
    "value": "w",
    "start": 141,
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
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 70,
        "end": 72
      },
      "expression": false,
      "start": 51,
      "end": 72
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
        "start": 113,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 142,
                  "end": 147
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "optional": false,
                "computed": false,
                "start": 142,
                "end": 149
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 142,
              "end": 151
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 131,
            "end": 152
          }
        ],
        "start": 125,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 51,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 131,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 70,
        "end": 72
      },
      "expression": false,
      "start": 51,
      "end": 72
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
        "start": 113,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 140,
                      "end": 145
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "optional": false,
                    "computed": false,
                    "start": 140,
                    "end": 147
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 140,
                  "end": 149
                },
                "directive": null,
                "start": 140,
                "end": 150
              }
            ],
            "start": 131,
            "end": 152
          }
        ],
        "start": 125,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 51,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 69,
        "end": 71
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 51,
      "end": 71
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
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 141,
                  "end": 146
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
                },
                "optional": false,
                "computed": false,
                "start": 141,
                "end": 148
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 141,
              "end": 150
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 130,
            "end": 151
          }
        ],
        "start": 124,
        "end": 153
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 154
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 114,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 130,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 69,
        "end": 71
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 51,
      "end": 71
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
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 139,
                      "end": 144
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 139,
                    "end": 146
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 139,
                  "end": 148
                },
                "directive": null,
                "start": 139,
                "end": 149
              }
            ],
            "start": 130,
            "end": 151
          }
        ],
        "start": 124,
        "end": 153
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 154
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 114,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 64,
        "end": 66
      },
      "const": false,
      "declare": false,
      "start": 51,
      "end": 66
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
        "start": 107,
        "end": 108
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 118
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 136,
                  "end": 141
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                },
                "optional": false,
                "computed": false,
                "start": 136,
                "end": 143
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 136,
              "end": 145
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 125,
            "end": 146
          }
        ],
        "start": 119,
        "end": 148
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 51,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 132,
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
    "value": "super",
    "start": 136,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 64,
        "end": 66
      },
      "const": false,
      "declare": false,
      "start": 51,
      "end": 66
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
        "start": 107,
        "end": 108
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 118
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 134,
                      "end": 139
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 141
                    },
                    "optional": false,
                    "computed": false,
                    "start": 134,
                    "end": 141
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 134,
                  "end": 143
                },
                "directive": null,
                "start": 134,
                "end": 144
              }
            ],
            "start": 125,
            "end": 146
          }
        ],
        "start": 119,
        "end": 148
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 51,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 69
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 70,
        "end": 72
      },
      "const": true,
      "declare": false,
      "start": 51,
      "end": 72
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
        "start": 113,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 142,
                  "end": 147
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "optional": false,
                "computed": false,
                "start": 142,
                "end": 149
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 142,
              "end": 151
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 131,
            "end": 152
          }
        ],
        "start": 125,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 51,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 62,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 131,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 69
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 70,
        "end": 72
      },
      "const": true,
      "declare": false,
      "start": 51,
      "end": 72
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
        "start": 113,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 140,
                      "end": 145
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "optional": false,
                    "computed": false,
                    "start": 140,
                    "end": 147
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 140,
                  "end": 149
                },
                "directive": null,
                "start": 140,
                "end": 150
              }
            ],
            "start": 131,
            "end": 152
          }
        ],
        "start": 125,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 51,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 62,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 70
          },
          "start": 58,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 76,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 89
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
        "start": 130,
        "end": 131
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 141
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 159,
                  "end": 164
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "optional": false,
                "computed": false,
                "start": 159,
                "end": 166
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 159,
              "end": 168
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 148,
            "end": 169
          }
        ],
        "start": 142,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 124,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 63,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 76,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 124,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 132,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 148,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
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
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 70
          },
          "start": 58,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 76,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 89
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
        "start": 130,
        "end": 131
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 141
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 157,
                      "end": 162
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "optional": false,
                    "computed": false,
                    "start": 157,
                    "end": 164
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 157,
                  "end": 166
                },
                "directive": null,
                "start": 157,
                "end": 167
              }
            ],
            "start": 148,
            "end": 169
          }
        ],
        "start": 142,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 124,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 63,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 76,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 124,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 132,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
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
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "importKind": "value",
          "start": 60,
          "end": 67
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 75,
        "end": 87
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 88
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
        "start": 129,
        "end": 130
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 158,
                  "end": 163
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 165
                },
                "optional": false,
                "computed": false,
                "start": 158,
                "end": 165
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 158,
              "end": 167
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 147,
            "end": 168
          }
        ],
        "start": 141,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 123,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 70,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 75,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 147,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "w",
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
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "importKind": "value",
          "start": 60,
          "end": 67
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 75,
        "end": 87
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 88
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
        "start": 129,
        "end": 130
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 156,
                      "end": 161
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 163
                    },
                    "optional": false,
                    "computed": false,
                    "start": 156,
                    "end": 163
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 156,
                  "end": 165
                },
                "directive": null,
                "start": 156,
                "end": 166
              }
            ],
            "start": 147,
            "end": 168
          }
        ],
        "start": 141,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 123,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 70,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 75,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 147,
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
    "value": "super",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
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
        "start": 160,
        "end": 161
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 189,
                  "end": 194
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "optional": false,
                "computed": false,
                "start": 189,
                "end": 196
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 189,
              "end": 198
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 178,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 82,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 162,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 189,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
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
        "start": 160,
        "end": 161
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 194
                    },
                    "optional": false,
                    "computed": false,
                    "start": 187,
                    "end": 194
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 187,
                  "end": 196
                },
                "directive": null,
                "start": 187,
                "end": 197
              }
            ],
            "start": 178,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 82,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 162,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
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
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
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
        "start": 160,
        "end": 161
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 189,
                  "end": 194
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "optional": false,
                "computed": false,
                "start": 189,
                "end": 196
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 189,
              "end": 198
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 178,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 82,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 162,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 189,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
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
        "start": 160,
        "end": 161
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 194
                    },
                    "optional": false,
                    "computed": false,
                    "start": 187,
                    "end": 194
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 187,
                  "end": 196
                },
                "directive": null,
                "start": 187,
                "end": 197
              }
            ],
            "start": 178,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 82,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 162,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
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
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
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
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 165,
                  "end": 170
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 172
                },
                "optional": false,
                "computed": false,
                "start": 165,
                "end": 172
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 165,
              "end": 174
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 154,
            "end": 175
          }
        ],
        "start": 148,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 177
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 178
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 82,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 138,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 154,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
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
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 163,
                      "end": 168
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "optional": false,
                    "computed": false,
                    "start": 163,
                    "end": 170
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 163,
                  "end": 172
                },
                "directive": null,
                "start": 163,
                "end": 173
              }
            ],
            "start": 154,
            "end": 175
          }
        ],
        "start": 148,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 177
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 178
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 82,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 138,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "importKind": "value",
          "start": 65,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 80,
        "end": 92
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 51,
      "end": 93
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
        "start": 116,
        "end": 117
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 127
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 145,
                  "end": 150
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "optional": false,
                "computed": false,
                "start": 145,
                "end": 152
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 145,
              "end": 154
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 134,
            "end": 155
          }
        ],
        "start": 128,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 157
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 158
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 58,
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
    "value": "Reflect",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 80,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 118,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 134,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "importKind": "value",
          "start": 65,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 80,
        "end": 92
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 51,
      "end": 93
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
        "start": 116,
        "end": 117
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 127
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 143,
                      "end": 148
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 150
                    },
                    "optional": false,
                    "computed": false,
                    "start": 143,
                    "end": 150
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 143,
                  "end": 152
                },
                "directive": null,
                "start": 143,
                "end": 153
              }
            ],
            "start": 134,
            "end": 155
          }
        ],
        "start": 128,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 157
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 158
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 58,
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
    "value": "Reflect",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 80,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 118,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 65
          },
          "start": 58,
          "end": 65
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 71,
        "end": 83
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 84
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
        "start": 125,
        "end": 126
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 136
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 154,
                  "end": 159
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "optional": false,
                "computed": false,
                "start": 154,
                "end": 161
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 154,
              "end": 163
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 143,
            "end": 164
          }
        ],
        "start": 137,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 167
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 58,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 66,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 71,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 127,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 143,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 65
          },
          "start": 58,
          "end": 65
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 71,
        "end": 83
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 84
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
        "start": 125,
        "end": 126
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 136
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 152,
                      "end": 157
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 159
                    },
                    "optional": false,
                    "computed": false,
                    "start": 152,
                    "end": 159
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 152,
                  "end": 161
                },
                "directive": null,
                "start": 152,
                "end": 162
              }
            ],
            "start": 143,
            "end": 164
          }
        ],
        "start": 137,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 167
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 58,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 66,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 71,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 127,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 70
          },
          "start": 63,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 76,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 51,
      "end": 89
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
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 141,
                  "end": 146
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
                },
                "optional": false,
                "computed": false,
                "start": 141,
                "end": 148
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 141,
              "end": 150
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 130,
            "end": 151
          }
        ],
        "start": 124,
        "end": 153
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 154
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 58,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 63,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 76,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 114,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 130,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 70
          },
          "start": 63,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 76,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 51,
      "end": 89
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
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 139,
                      "end": 144
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 139,
                    "end": 146
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 139,
                  "end": 148
                },
                "directive": null,
                "start": 139,
                "end": 149
              }
            ],
            "start": 130,
            "end": 151
          }
        ],
        "start": 124,
        "end": 153
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 154
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 58,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 63,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"./external\"",
    "start": 76,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 114,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 66,
        "end": 73
      },
      "declare": false,
      "start": 51,
      "end": 74
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
        "start": 97,
        "end": 98
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 126,
                  "end": 131
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 133
                },
                "optional": false,
                "computed": false,
                "start": 126,
                "end": 133
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 126,
              "end": 135
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 115,
            "end": 136
          }
        ],
        "start": 109,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 91,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 139
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 51,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 99,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 115,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 66,
        "end": 73
      },
      "declare": false,
      "start": 51,
      "end": 74
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
        "start": 97,
        "end": 98
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 124,
                      "end": 129
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 131
                    },
                    "optional": false,
                    "computed": false,
                    "start": 124,
                    "end": 131
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 124,
                  "end": 133
                },
                "directive": null,
                "start": 124,
                "end": 134
              }
            ],
            "start": 115,
            "end": 136
          }
        ],
        "start": 109,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 91,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 139
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 51,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 99,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 69,
        "end": 71
      },
      "declare": false,
      "start": 51,
      "end": 71
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
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
        "start": 95,
        "end": 96
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 106
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 124,
                  "end": 129
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "optional": false,
                "computed": false,
                "start": 124,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 124,
              "end": 133
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 113,
            "end": 134
          }
        ],
        "start": 107,
        "end": 136
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 136
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 137
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 97,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 113,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 69,
        "end": 71
      },
      "declare": false,
      "start": 51,
      "end": 71
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
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
        "start": 95,
        "end": 96
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 106
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 122,
                      "end": 127
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "optional": false,
                    "computed": false,
                    "start": 122,
                    "end": 129
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 122,
                  "end": 131
                },
                "directive": null,
                "start": 122,
                "end": 132
              }
            ],
            "start": 113,
            "end": 134
          }
        ],
        "start": 107,
        "end": 136
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 136
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 137
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 97,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 88,
              "end": 95
            },
            "declare": false,
            "start": 79,
            "end": 96
          }
        ],
        "start": 77,
        "end": 98
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 51,
      "end": 98
    },
    {
      "type": "EmptyStatement",
      "start": 98,
      "end": 99
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
        "start": 122,
        "end": 123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 151,
                  "end": 156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "optional": false,
                "computed": false,
                "start": 151,
                "end": 158
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 151,
              "end": 160
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 140,
            "end": 161
          }
        ],
        "start": 134,
        "end": 163
      },
      "abstract": false,
      "declare": false,
      "start": 116,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 164
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 51,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 59,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Reflect",
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
    "type": "Identifier",
    "value": "type",
    "start": 79,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 124,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 140,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 88,
              "end": 95
            },
            "declare": false,
            "start": 79,
            "end": 96
          }
        ],
        "start": 77,
        "end": 98
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 51,
      "end": 98
    },
    {
      "type": "EmptyStatement",
      "start": 98,
      "end": 99
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
        "start": 122,
        "end": 123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 149,
                      "end": 154
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 156
                    },
                    "optional": false,
                    "computed": false,
                    "start": 149,
                    "end": 156
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 149,
                  "end": 158
                },
                "directive": null,
                "start": 149,
                "end": 159
              }
            ],
            "start": 140,
            "end": 161
          }
        ],
        "start": 134,
        "end": 163
      },
      "abstract": false,
      "declare": false,
      "start": 116,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 164
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 51,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 59,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Reflect",
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
    "type": "Identifier",
    "value": "type",
    "start": 79,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 124,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 65
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 66,
          "end": 68
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 68
      },
      "directive": null,
      "start": 51,
      "end": 70
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
        "start": 93,
        "end": 94
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 119
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 122,
                  "end": 127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                },
                "optional": false,
                "computed": false,
                "start": 122,
                "end": 129
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 122,
              "end": 131
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 111,
            "end": 132
          }
        ],
        "start": 105,
        "end": 134
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 134
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 135
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 95,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 111,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 65
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 66,
          "end": 68
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 68
      },
      "directive": null,
      "start": 51,
      "end": 70
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
        "start": 93,
        "end": 94
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 120,
                      "end": 125
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 127
                    },
                    "optional": false,
                    "computed": false,
                    "start": 120,
                    "end": 127
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 120,
                  "end": 129
                },
                "directive": null,
                "start": 120,
                "end": 130
              }
            ],
            "start": 111,
            "end": 132
          }
        ],
        "start": 105,
        "end": 134
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 134
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 135
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 95,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 65
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "StaticBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
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
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 163
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 166,
                              "end": 171
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "w",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 172,
                              "end": 173
                            },
                            "optional": false,
                            "computed": false,
                            "start": 166,
                            "end": 173
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 166,
                          "end": 175
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 155,
                        "end": 176
                      }
                    ],
                    "start": 141,
                    "end": 186
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 123,
                  "end": 186
                }
              ],
              "start": 106,
              "end": 192
            }
          ],
          "start": 66,
          "end": 194
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 194
      },
      "directive": null,
      "start": 51,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 197
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 155,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 65
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "StaticBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
                  },
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "StaticBlock",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 164,
                                  "end": 169
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "w",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 170,
                                  "end": 171
                                },
                                "optional": false,
                                "computed": false,
                                "start": 164,
                                "end": 171
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 164,
                              "end": 173
                            },
                            "directive": null,
                            "start": 164,
                            "end": 174
                          }
                        ],
                        "start": 155,
                        "end": 176
                      }
                    ],
                    "start": 141,
                    "end": 186
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 123,
                  "end": 186
                }
              ],
              "start": 106,
              "end": 192
            }
          ],
          "start": 66,
          "end": 194
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 194
      },
      "directive": null,
      "start": 51,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 197
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 68
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 71,
          "end": 73
        },
        "expression": false,
        "start": 52,
        "end": 73
      },
      "directive": null,
      "start": 51,
      "end": 75
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
        "start": 98,
        "end": 99
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 127,
                  "end": 132
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 134
                },
                "optional": false,
                "computed": false,
                "start": 127,
                "end": 134
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 127,
              "end": 136
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 116,
            "end": 137
          }
        ],
        "start": 110,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 140
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 52,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 100,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 116,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 68
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 71,
          "end": 73
        },
        "expression": false,
        "start": 52,
        "end": 73
      },
      "directive": null,
      "start": 51,
      "end": 75
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
        "start": 98,
        "end": 99
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 125,
                      "end": 130
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 132
                    },
                    "optional": false,
                    "computed": false,
                    "start": 125,
                    "end": 132
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 125,
                  "end": 134
                },
                "directive": null,
                "start": 125,
                "end": 135
              }
            ],
            "start": 116,
            "end": 137
          }
        ],
        "start": 110,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 140
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 52,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 100,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 116,
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
    "value": "super",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 68
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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
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
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 150,
                          "end": 155
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "w",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 157
                        },
                        "optional": false,
                        "computed": false,
                        "start": 150,
                        "end": 157
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 150,
                      "end": 159
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 139,
                    "end": 160
                  }
                ],
                "start": 129,
                "end": 166
              },
              "abstract": false,
              "declare": false,
              "start": 111,
              "end": 166
            }
          ],
          "start": 71,
          "end": 168
        },
        "expression": false,
        "start": 52,
        "end": 168
      },
      "directive": null,
      "start": 51,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 52,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 119,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 139,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
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
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 68
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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "StaticBlock",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 148,
                              "end": 153
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "w",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 154,
                              "end": 155
                            },
                            "optional": false,
                            "computed": false,
                            "start": 148,
                            "end": 155
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 148,
                          "end": 157
                        },
                        "directive": null,
                        "start": 148,
                        "end": 158
                      }
                    ],
                    "start": 139,
                    "end": 160
                  }
                ],
                "start": 129,
                "end": 166
              },
              "abstract": false,
              "declare": false,
              "start": 111,
              "end": 166
            }
          ],
          "start": 71,
          "end": 168
        },
        "expression": false,
        "start": 52,
        "end": 168
      },
      "directive": null,
      "start": 51,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
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
    "value": "B",
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
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 52,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 119,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  }
]
```
