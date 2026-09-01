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
            "name": "cloneObjectGood",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 116
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 124
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 155
                  },
                  "start": 147,
                  "end": 155
                }
              ],
              "start": 145,
              "end": 157
            },
            "id": null,
            "generator": false,
            "start": 119,
            "end": 158
          },
          "definite": false,
          "start": 101,
          "end": 158
        }
      ],
      "declare": false,
      "start": 95,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 95,
  "end": 159
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "cloneObjectGood",
    "start": 101,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 147,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
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
    "value": ";",
    "start": 158,
    "end": 159
  }
]
```
