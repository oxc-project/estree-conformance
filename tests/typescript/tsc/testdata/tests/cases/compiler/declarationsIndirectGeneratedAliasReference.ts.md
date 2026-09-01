__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Ctor",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 21
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
                },
                "start": 29,
                "end": 37
              },
              "accessibility": null,
              "static": false,
              "start": 28,
              "end": 38
            }
          ],
          "start": 22,
          "end": 40
        },
        "declare": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedCtor",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 65
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
                "start": 66,
                "end": 67
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 66,
              "end": 67
            }
          ],
          "start": 65,
          "end": 68
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 75,
                  "end": 81
                },
                "start": 73,
                "end": 81
              },
              "accessibility": null,
              "static": false,
              "start": 72,
              "end": 82
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ext",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 86
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
                    "start": 88,
                    "end": 89
                  },
                  "typeArguments": null,
                  "start": 88,
                  "end": 89
                },
                "start": 86,
                "end": 89
              },
              "accessibility": null,
              "static": false,
              "start": 83,
              "end": 89
            }
          ],
          "start": 71,
          "end": 90
        },
        "declare": false,
        "start": 48,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 41,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CtorConstructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 124
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
                "name": "extends",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 138
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 139,
                      "end": 140
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 139,
                    "end": 140
                  }
                ],
                "start": 138,
                "end": 141
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "start": 145,
                        "end": 146
                      },
                      "typeArguments": null,
                      "start": 145,
                      "end": 146
                    },
                    "start": 143,
                    "end": 146
                  },
                  "start": 142,
                  "end": 146
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExtendedCtor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 161
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 163
                          },
                          "typeArguments": null,
                          "start": 162,
                          "end": 163
                        },
                        "extendsType": {
                          "type": "TSUnknownKeyword",
                          "start": 172,
                          "end": 179
                        },
                        "trueType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Ctor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 186
                          },
                          "typeArguments": null,
                          "start": 182,
                          "end": 186
                        },
                        "falseType": {
                          "type": "TSUndefinedKeyword",
                          "start": 189,
                          "end": 198
                        },
                        "start": 162,
                        "end": 198
                      }
                    ],
                    "start": 161,
                    "end": 199
                  },
                  "start": 149,
                  "end": 199
                },
                "start": 147,
                "end": 199
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 131,
              "end": 200
            }
          ],
          "start": 125,
          "end": 202
        },
        "declare": false,
        "start": 99,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 92,
      "end": 202
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Ctor",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CtorConstructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 237
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 237
                },
                "start": 220,
                "end": 237
              },
              "start": 216,
              "end": 237
            },
            "init": null,
            "definite": false,
            "start": 216,
            "end": 237
          }
        ],
        "declare": false,
        "start": 210,
        "end": 238
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 203,
      "end": 238
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 238
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 41,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 48,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "ExtendedCtor",
    "start": 53,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "ext",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 92,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 99,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "CtorConstructor",
    "start": 109,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "ExtendedCtor",
    "start": 149,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 164,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 172,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 189,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 203,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 210,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "CtorConstructor",
    "start": 222,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ctor",
        "raw": "\"./ctor\"",
        "start": 21,
        "end": 29
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ctor",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 50
      },
      "exportKind": "value",
      "start": 31,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
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
    "type": "Identifier",
    "value": "Ctor",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"./ctor\"",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 38,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "mod",
        "raw": "\"mod\"",
        "start": 20,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
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
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 37
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 42
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 50
            },
            "optional": false,
            "computed": false,
            "start": 40,
            "end": 50
          },
          "definite": false,
          "start": 33,
          "end": 50
        }
      ],
      "declare": false,
      "start": 27,
      "end": 51
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyComp",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ctor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 78
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extends",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 86
                },
                "optional": false,
                "computed": false,
                "start": 74,
                "end": 86
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 91
                      },
                      "value": {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "\"bar\"",
                        "start": 93,
                        "end": 98
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 88,
                      "end": 98
                    }
                  ],
                  "start": 87,
                  "end": 99
                }
              ],
              "optional": false,
              "start": 74,
              "end": 100
            },
            "definite": false,
            "start": 65,
            "end": 100
          }
        ],
        "declare": false,
        "start": 59,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 12,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"mod\"",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 27,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "default",
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
    "value": "export",
    "start": 52,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 59,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "MyComp",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "extends",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  }
]
```
