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
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
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
    "value": "A",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
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
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 22
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 25,
                  "end": 31
                },
                "start": 23,
                "end": 31
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": true,
              "readonly": false,
              "accessibility": null,
              "start": 21,
              "end": 32
            }
          ],
          "start": 15,
          "end": 34
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 34
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
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
    "value": "B",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./f1",
        "raw": "\"./f1\"",
        "start": 16,
        "end": 22
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 36
            },
            "optional": false,
            "computed": false,
            "start": 25,
            "end": 36
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 40
          },
          "optional": false,
          "computed": false,
          "start": 25,
          "end": 40
        },
        "right": {
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 73
                },
                "start": 57,
                "end": 74
              }
            ],
            "start": 55,
            "end": 76
          },
          "expression": false,
          "start": 43,
          "end": 76
        },
        "start": 25,
        "end": 76
      },
      "directive": null,
      "start": 25,
      "end": 76
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 89
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ifc",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 116
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 120
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 119,
                    "end": 120
                  }
                ],
                "start": 117,
                "end": 122
              },
              "declare": false,
              "start": 103,
              "end": 122
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 96,
            "end": 122
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 147
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 151
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 150,
                    "end": 151
                  }
                ],
                "start": 148,
                "end": 153
              },
              "declare": false,
              "start": 134,
              "end": 153
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 127,
            "end": 153
          }
        ],
        "start": 90,
        "end": 155
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 78,
      "end": 155
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./f1",
        "raw": "\"./f1\"",
        "start": 172,
        "end": 178
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "importKind": "value",
                "start": 193,
                "end": 194
              }
            ],
            "source": {
              "type": "Literal",
              "value": "./f2",
              "raw": "\"./f2\"",
              "start": 201,
              "end": 207
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 185,
            "end": 208
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 222
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 222
                },
                "exportKind": "value",
                "start": 221,
                "end": 222
              }
            ],
            "source": {
              "type": "Literal",
              "value": "./f2",
              "raw": "\"./f2\"",
              "start": 229,
              "end": 235
            },
            "exportKind": "value",
            "attributes": [],
            "start": 213,
            "end": 236
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 253
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ifc",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 257
              },
              "start": 252,
              "end": 257
            },
            "importKind": "value",
            "start": 241,
            "end": 258
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 279
              },
              "start": 274,
              "end": 279
            },
            "importKind": "value",
            "start": 263,
            "end": 280
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 345
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 350
                      },
                      "typeArguments": null,
                      "start": 349,
                      "end": 350
                    },
                    "start": 347,
                    "end": 350
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 342,
                  "end": 351
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 360,
                    "end": 363
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 367,
                        "end": 368
                      },
                      "typeArguments": null,
                      "start": 367,
                      "end": 368
                    },
                    "start": 365,
                    "end": 368
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 360,
                  "end": 369
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 381
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 385,
                        "end": 386
                      },
                      "typeArguments": null,
                      "start": 385,
                      "end": 386
                    },
                    "start": 383,
                    "end": 386
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 378,
                  "end": 387
                }
              ],
              "start": 332,
              "end": 393
            },
            "declare": false,
            "start": 320,
            "end": 393
          }
        ],
        "start": 179,
        "end": 395
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 157,
      "end": 395
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 396
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
    "value": "A",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./f1\"",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 27,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 57,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 64,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
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
    "value": "namespace",
    "start": 78,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 96,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 103,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Ifc",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 127,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 134,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 157,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 165,
    "end": 171
  },
  {
    "type": "String",
    "value": "\"./f1\"",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 196,
    "end": 200
  },
  {
    "type": "String",
    "value": "\"./f2\"",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 224,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"./f2\"",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 241,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Ifc",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 263,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 320,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 349,
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
    "value": "bar",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
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
    "value": "I",
    "start": 367,
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
    "value": "baz",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./f1",
        "raw": "\"./f1\"",
        "start": 16,
        "end": 22
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 23
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./f3",
        "raw": "\"./f3\"",
        "start": 31,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 24,
      "end": 38
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 56
                },
                "typeArguments": null,
                "start": 55,
                "end": 56
              },
              "start": 53,
              "end": 56
            },
            "start": 52,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 52,
          "end": 56
        }
      ],
      "declare": true,
      "start": 40,
      "end": 57
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 67
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 71
                },
                "optional": false,
                "computed": false,
                "start": 66,
                "end": 71
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 66,
              "end": 73
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "optional": false,
            "computed": false,
            "start": 66,
            "end": 75
          },
          "definite": false,
          "start": 62,
          "end": 75
        }
      ],
      "declare": false,
      "start": 58,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
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
    "value": "A",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./f1\"",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 24,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"./f3\"",
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
    "type": "Identifier",
    "value": "declare",
    "start": 40,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 58,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 62,
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
    "value": "a",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  }
]
```
