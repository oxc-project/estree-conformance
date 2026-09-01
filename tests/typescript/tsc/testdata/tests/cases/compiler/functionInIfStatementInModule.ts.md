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
        "name": "Midori",
        "optional": false,
        "typeAnnotation": null,
        "start": 12,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 29,
              "end": 34
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 58
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "src",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 62
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 72,
                    "end": 83
                  },
                  "expression": false,
                  "start": 46,
                  "end": 83
                }
              ],
              "start": 36,
              "end": 89
            },
            "alternate": null,
            "start": 25,
            "end": 89
          }
        ],
        "start": 19,
        "end": 91
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2,
      "end": 91
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 91
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Midori",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  }
]
```
