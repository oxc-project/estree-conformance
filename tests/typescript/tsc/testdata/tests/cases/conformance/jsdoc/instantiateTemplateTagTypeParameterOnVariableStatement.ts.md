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
            "name": "seq",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 74
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 83
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "id": null,
              "generator": false,
              "start": 82,
              "end": 88
            },
            "id": null,
            "generator": false,
            "start": 77,
            "end": 88
          },
          "definite": false,
          "start": 71,
          "end": 88
        }
      ],
      "declare": false,
      "start": 65,
      "end": 89
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
            "name": "text1",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 102
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 105,
            "end": 112
          },
          "definite": false,
          "start": 97,
          "end": 112
        }
      ],
      "declare": false,
      "start": 91,
      "end": 113
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
            "name": "text2",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 125
          },
          "init": {
            "type": "Literal",
            "value": "world",
            "raw": "\"world\"",
            "start": 128,
            "end": 135
          },
          "definite": false,
          "start": 120,
          "end": 135
        }
      ],
      "declare": false,
      "start": 114,
      "end": 136
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
            "name": "text3",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 169
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "seq",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 175
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 181
                }
              ],
              "optional": false,
              "start": 172,
              "end": 182
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "text2",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 188
              }
            ],
            "optional": false,
            "start": 172,
            "end": 189
          },
          "definite": false,
          "start": 164,
          "end": 189
        }
      ],
      "declare": false,
      "start": 160,
      "end": 190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 65,
  "end": 190
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "seq",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 79,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 84,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 87,
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
    "value": "const",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "text1",
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
    "type": "String",
    "value": "\"hello\"",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "text2",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "text3",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "seq",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "text1",
    "start": 176,
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
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "text2",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  }
]
```
