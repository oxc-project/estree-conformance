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
        "name": "model",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 102
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./greeter",
          "raw": "\"./greeter\"",
          "start": 113,
          "end": 124
        },
        "start": 105,
        "end": 125
      },
      "importKind": "value",
      "start": 90,
      "end": 125
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
            "name": "el",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 132
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "document",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 143
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getElementById",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 158
              },
              "optional": false,
              "computed": false,
              "start": 135,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "content",
                "raw": "'content'",
                "start": 159,
                "end": 168
              }
            ],
            "optional": false,
            "start": 135,
            "end": 169
          },
          "definite": false,
          "start": 130,
          "end": 169
        }
      ],
      "declare": false,
      "start": 126,
      "end": 170
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
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 182
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "model",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 194
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Greeter",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 202
              },
              "optional": false,
              "computed": false,
              "start": 189,
              "end": 202
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "el",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 205
              }
            ],
            "start": 185,
            "end": 206
          },
          "definite": false,
          "start": 175,
          "end": 206
        }
      ],
      "declare": false,
      "start": 171,
      "end": 207
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
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 229
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "start",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 235
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 235
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 222,
        "end": 237
      },
      "directive": null,
      "start": 222,
      "end": 238
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 90,
  "end": 238
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 90,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "String",
    "value": "\"./greeter\"",
    "start": 113,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 135,
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
    "value": "getElementById",
    "start": 144,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "String",
    "value": "'content'",
    "start": 159,
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
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "greeter",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "model",
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
    "value": "Greeter",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "greeter",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
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
