__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "db",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 23
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
                "name": "doSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 48
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
                  "body": [],
                  "start": 51,
                  "end": 58
                },
                "expression": false,
                "start": 48,
                "end": 58
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 30,
              "end": 58
            }
          ],
          "start": 24,
          "end": 60
        },
        "abstract": false,
        "declare": false,
        "start": 15,
        "end": 60
      },
      "exportKind": "value",
      "start": 0,
      "end": 60
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 61
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
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 37,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 9
          },
          "start": 7,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./db",
        "raw": "'./db'",
        "start": 15,
        "end": 21
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 22
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 45
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 52
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 73
            },
            "start": 60,
            "end": 74
          }
        ],
        "start": 54,
        "end": 76
      },
      "expression": false,
      "start": 23,
      "end": 76
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "someDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 91
          },
          "start": 77,
          "end": 91
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 105
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
              "name": "db",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 118
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 121
                  },
                  "start": 116,
                  "end": 121
                },
                "typeArguments": null,
                "start": 116,
                "end": 121
              },
              "start": 114,
              "end": 121
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
            "start": 112,
            "end": 122
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 147
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
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 154
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 157
                        },
                        "start": 152,
                        "end": 157
                      },
                      "typeArguments": null,
                      "start": 152,
                      "end": 157
                    },
                    "start": 150,
                    "end": 157
                  },
                  "start": 148,
                  "end": 157
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
                          "start": 178,
                          "end": 182
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 183,
                          "end": 185
                        },
                        "optional": false,
                        "computed": false,
                        "start": 178,
                        "end": 185
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 190
                      },
                      "start": 178,
                      "end": 190
                    },
                    "directive": null,
                    "start": 178,
                    "end": 191
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 200,
                            "end": 204
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "db",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 205,
                            "end": 207
                          },
                          "optional": false,
                          "computed": false,
                          "start": 200,
                          "end": 207
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "doSomething",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 219
                        },
                        "optional": false,
                        "computed": false,
                        "start": 200,
                        "end": 219
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 200,
                      "end": 221
                    },
                    "directive": null,
                    "start": 200,
                    "end": 222
                  }
                ],
                "start": 159,
                "end": 228
              },
              "expression": false,
              "start": 147,
              "end": 228
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 136,
            "end": 228
          }
        ],
        "start": 106,
        "end": 230
      },
      "abstract": false,
      "declare": false,
      "start": 77,
      "end": 230
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
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 246
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 246
          },
          "exportKind": "value",
          "start": 239,
          "end": 246
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 231,
      "end": 248
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 248
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
    "type": "Identifier",
    "value": "db",
    "start": 7,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 10,
    "end": 14
  },
  {
    "type": "String",
    "value": "'./db'",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 32,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 67,
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
    "type": "Punctuator",
    "value": "@",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 78,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 136,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 152,
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
    "value": "db",
    "start": 155,
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
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 208,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
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
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 239,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  }
]
```
