__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 92
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 112
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 125,
                      "end": 131
                    },
                    "start": 123,
                    "end": 131
                  },
                  "start": 122,
                  "end": 131
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 136,
                "end": 139
              },
              "id": null,
              "generator": false,
              "start": 115,
              "end": 139
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 99,
            "end": 140
          }
        ],
        "start": 93,
        "end": 142
      },
      "abstract": false,
      "declare": false,
      "start": 82,
      "end": 142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 142
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 99,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  }
]
```
