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
          "name": "db",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 15
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
                "start": 29,
                "end": 40
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
                  "start": 43,
                  "end": 50
                },
                "expression": false,
                "start": 40,
                "end": 50
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 22,
              "end": 50
            }
          ],
          "start": 16,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
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
    "value": "db",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 29,
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
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "database",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./db",
          "raw": "'./db'",
          "start": 26,
          "end": 32
        },
        "start": 18,
        "end": 33
      },
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 57
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
          "start": 58,
          "end": 64
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
              "start": 79,
              "end": 85
            },
            "start": 72,
            "end": 86
          }
        ],
        "start": 66,
        "end": 88
      },
      "expression": false,
      "start": 35,
      "end": 88
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
            "start": 90,
            "end": 103
          },
          "start": 89,
          "end": 103
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 117
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
              "start": 124,
              "end": 126
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
                    "name": "database",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 136
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 139
                  },
                  "start": 128,
                  "end": 139
                },
                "typeArguments": null,
                "start": 128,
                "end": 139
              },
              "start": 126,
              "end": 139
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
            "start": 124,
            "end": 140
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
              "start": 146,
              "end": 157
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
                          "name": "database",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 170
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 173
                        },
                        "start": 162,
                        "end": 173
                      },
                      "typeArguments": null,
                      "start": 162,
                      "end": 173
                    },
                    "start": 160,
                    "end": 173
                  },
                  "start": 158,
                  "end": 173
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
                          "start": 201,
                          "end": 205
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 208
                        },
                        "optional": false,
                        "computed": false,
                        "start": 201,
                        "end": 208
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 213
                      },
                      "start": 201,
                      "end": 213
                    },
                    "directive": null,
                    "start": 201,
                    "end": 214
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
                            "start": 223,
                            "end": 227
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "db",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 228,
                            "end": 230
                          },
                          "optional": false,
                          "computed": false,
                          "start": 223,
                          "end": 230
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "doSomething",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 242
                        },
                        "optional": false,
                        "computed": false,
                        "start": 223,
                        "end": 242
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 223,
                      "end": 244
                    },
                    "directive": null,
                    "start": 223,
                    "end": 245
                  }
                ],
                "start": 175,
                "end": 251
              },
              "expression": false,
              "start": 157,
              "end": 251
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 146,
            "end": 251
          }
        ],
        "start": 118,
        "end": 253
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 253
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
            "start": 262,
            "end": 269
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 269
          },
          "exportKind": "value",
          "start": 262,
          "end": 269
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 254,
      "end": 271
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 271
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
    "value": "database",
    "start": 7,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "'./db'",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 35,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 44,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
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
    "value": "return",
    "start": 72,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 90,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 104,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 110,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 124,
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
    "value": "database",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 146,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "database",
    "start": 162,
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
    "value": "db",
    "start": 171,
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
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 231,
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
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 262,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  }
]
```
