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
            "name": "cb",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 149
          },
          "init": {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ThisExpression",
                    "start": 174,
                    "end": 178
                  },
                  "directive": null,
                  "start": 174,
                  "end": 178
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 190,
                    "end": 194
                  },
                  "start": 183,
                  "end": 194
                }
              ],
              "start": 168,
              "end": 196
            },
            "expression": false,
            "start": 152,
            "end": 196
          },
          "definite": false,
          "start": 147,
          "end": 196
        }
      ],
      "declare": false,
      "start": 141,
      "end": 196
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 141,
  "end": 196
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 141,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 152,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 174,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 183,
    "end": 189
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  }
]
```
