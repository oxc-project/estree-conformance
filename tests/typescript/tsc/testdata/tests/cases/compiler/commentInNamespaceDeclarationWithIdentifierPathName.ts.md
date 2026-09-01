__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 15
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "hi",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 18
          },
          "start": 10,
          "end": 18
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "world",
          "optional": false,
          "typeAnnotation": null,
          "start": 19,
          "end": 24
        },
        "start": 10,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 43
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 46,
              "end": 48
            },
            "expression": false,
            "start": 31,
            "end": 48
          }
        ],
        "start": 25,
        "end": 69
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 69
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 69
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
    "value": "hello",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 16,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "world",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 31,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  }
]
```
