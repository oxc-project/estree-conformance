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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 36
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 55
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 56,
                    "end": 63
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 43,
                  "end": 63
                }
              ],
              "start": 37,
              "end": 67
            },
            "kind": "namespace",
            "declare": true,
            "global": false,
            "start": 16,
            "end": 67
          }
        ],
        "start": 12,
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
    "value": "M",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 16,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 24,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 43,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  }
]
```
