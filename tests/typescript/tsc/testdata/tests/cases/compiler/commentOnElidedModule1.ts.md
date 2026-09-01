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
        "name": "ElidedModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 127
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 128,
        "end": 131
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 105,
      "end": 131
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElidedModule2",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 184
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 185,
        "end": 188
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 188
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 105,
  "end": 189
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 105,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "ElidedModule",
    "start": 115,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 161,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "ElidedModule2",
    "start": 171,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  }
]
```
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
        "name": "ElidedModule3",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 52,
        "end": 55
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 28,
      "end": 55
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 55
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 28,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "ElidedModule3",
    "start": 38,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  }
]
```
