__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "variable",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 37
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 44
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 46,
                        "end": 52
                      },
                      "start": 44,
                      "end": 52
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
                    "start": 43,
                    "end": 53
                  }
                ],
                "start": 37,
                "end": 57
              },
              "abstract": false,
              "declare": false,
              "start": 23,
              "end": 57
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 57
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 87
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
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
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 91,
                          "end": 92
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "variable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 101
                        },
                        "start": 91,
                        "end": 101
                      },
                      "typeArguments": null,
                      "start": 91,
                      "end": 101
                    },
                    "start": 89,
                    "end": 101
                  },
                  "start": 88,
                  "end": 101
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 103,
                "end": 113
              },
              "expression": false,
              "start": 67,
              "end": 113
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 60,
            "end": 113
          }
        ],
        "start": 12,
        "end": 115
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "variable",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 131
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 138,
                "end": 144
              },
              "start": 136,
              "end": 144
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
            "start": 135,
            "end": 145
          }
        ],
        "start": 132,
        "end": 147
      },
      "abstract": false,
      "declare": false,
      "start": 117,
      "end": 147
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 165
                },
                "typeArguments": null,
                "start": 157,
                "end": 165
              },
              "start": 155,
              "end": 165
            },
            "start": 154,
            "end": 165
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "variable",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 180
            },
            "typeArguments": null,
            "arguments": [],
            "start": 168,
            "end": 182
          },
          "definite": false,
          "start": 154,
          "end": 182
        }
      ],
      "declare": false,
      "start": 150,
      "end": 183
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 185
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 197
          },
          "optional": false,
          "computed": false,
          "start": 184,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 199
          }
        ],
        "optional": false,
        "start": 184,
        "end": 200
      },
      "directive": null,
      "start": 184,
      "end": 201
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 201
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 16,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 67,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 76,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 93,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 117,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 123,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
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
    "type": "Keyword",
    "value": "var",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 157,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 172,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 186,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  }
]
```
