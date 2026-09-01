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
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 31
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 35,
              "end": 41
            },
            "start": 33,
            "end": 41
          },
          "start": 32,
          "end": 41
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "start": 49,
            "end": 58
          }
        ],
        "start": 43,
        "end": 60
      },
      "expression": false,
      "start": 10,
      "end": 60
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 83
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 109,
                "end": 112
              },
              "declare": false,
              "start": 97,
              "end": 112
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 90,
            "end": 112
          }
        ],
        "start": 84,
        "end": 114
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 61,
      "end": 114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 114
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 10,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 19,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 61,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 71,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 90,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 97,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  }
]
```
