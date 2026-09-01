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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 15,
                "end": 22
              },
              "start": 13,
              "end": 22
            },
            "start": 12,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 46
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 47,
                      "end": 54
                    }
                  ],
                  "start": 46,
                  "end": 55
                },
                "start": 39,
                "end": 55
              },
              "start": 37,
              "end": 55
            },
            "start": 36,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 55
        }
      ],
      "declare": true,
      "start": 24,
      "end": 56
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "before",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 80
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 84,
          "end": 88
        },
        "start": 82,
        "end": 88
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 89
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "after",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 116,
          "end": 120
        },
        "start": 114,
        "end": 120
      },
      "body": null,
      "expression": false,
      "start": 90,
      "end": 121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 141
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 152
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 153,
                "end": 157
              }
            ],
            "start": 152,
            "end": 158
          },
          "start": 145,
          "end": 158
        },
        "start": 143,
        "end": 158
      },
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
                "name": "before",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 171
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 165,
              "end": 173
            },
            "directive": null,
            "start": 165,
            "end": 174
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 188,
                            "end": 189
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 191,
                              "end": 198
                            },
                            "start": 189,
                            "end": 198
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 188,
                          "end": 199
                        }
                      ],
                      "start": 186,
                      "end": 201
                    },
                    "start": 184,
                    "end": 201
                  },
                  "start": 183,
                  "end": 201
                },
                "init": null,
                "definite": false,
                "start": 183,
                "end": 201
              }
            ],
            "declare": false,
            "start": 179,
            "end": 202
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 208
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 210
                },
                "optional": false,
                "computed": false,
                "start": 207,
                "end": 210
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 220
                },
                "start": 213,
                "end": 220
              },
              "start": 207,
              "end": 220
            },
            "directive": null,
            "start": 207,
            "end": 221
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "after",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 231
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 226,
              "end": 233
            },
            "directive": null,
            "start": 226,
            "end": 234
          }
        ],
        "start": 159,
        "end": 236
      },
      "expression": false,
      "start": 122,
      "end": 236
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 15,
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
    "value": "declare",
    "start": 24,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 65,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "before",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 90,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 98,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "after",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 122,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 128,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 137,
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
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 145,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "before",
    "start": 165,
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
    "type": "Keyword",
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 191,
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
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "after",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  }
]
```
