__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            },
            "start": 22,
            "end": 27
          },
          "start": 21,
          "end": 27
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TopLevelConstEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 58
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "initializer": null,
            "computed": false,
            "start": 61,
            "end": 62
          }
        ],
        "start": 59,
        "end": 64
      },
      "const": true,
      "declare": false,
      "start": 30,
      "end": 64
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 85
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 97
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TopLevelConstEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 115
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 117
                    },
                    "optional": false,
                    "computed": false,
                    "start": 98,
                    "end": 117
                  }
                ],
                "optional": false,
                "start": 94,
                "end": 118
              },
              "directive": null,
              "start": 94,
              "end": 119
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 127
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 129
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonTopLevelConstEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 150
                      },
                      "optional": false,
                      "computed": false,
                      "start": 128,
                      "end": 150
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 152
                    },
                    "optional": false,
                    "computed": false,
                    "start": 128,
                    "end": 152
                  }
                ],
                "optional": false,
                "start": 124,
                "end": 153
              },
              "directive": null,
              "start": 124,
              "end": 154
            }
          ],
          "start": 88,
          "end": 156
        },
        "expression": false,
        "start": 73,
        "end": 156
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 66,
      "end": 156
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 169
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonTopLevelConstEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 214
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 218
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 217,
                    "end": 218
                  }
                ],
                "start": 215,
                "end": 220
              },
              "const": true,
              "declare": false,
              "start": 183,
              "end": 220
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 176,
            "end": 220
          }
        ],
        "start": 170,
        "end": 222
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 158,
      "end": 222
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 222
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 36,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "TopLevelConstEnum",
    "start": 41,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 66,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 73,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "TopLevelConstEnum",
    "start": 98,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 128,
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
    "value": "NonTopLevelConstEnum",
    "start": 130,
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
    "value": "X",
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
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 158,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 176,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 183,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 189,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "NonTopLevelConstEnum",
    "start": 194,
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
    "value": "X",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  }
]
```
