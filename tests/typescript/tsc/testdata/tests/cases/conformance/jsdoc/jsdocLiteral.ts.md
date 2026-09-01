__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 173
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 177
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p3",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 181
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p4",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 185
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p5",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 189
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 206
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 211
                      },
                      "start": 204,
                      "end": 211
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 216
                    },
                    "start": 204,
                    "end": 216
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 221
                  },
                  "start": 204,
                  "end": 221
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 226
                },
                "start": 204,
                "end": 226
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 229,
                "end": 232
              },
              "start": 204,
              "end": 232
            },
            "start": 197,
            "end": 233
          }
        ],
        "start": 191,
        "end": 235
      },
      "expression": false,
      "start": 160,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 160,
  "end": 235
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 160,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 175,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 197,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  }
]
```
