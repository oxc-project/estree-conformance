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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 103
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 148
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 143,
            "end": 149
          }
        ],
        "start": 104,
        "end": 151
      },
      "abstract": false,
      "declare": false,
      "start": 95,
      "end": 151
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 161
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 172
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 217
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 212,
            "end": 218
          }
        ],
        "start": 173,
        "end": 220
      },
      "abstract": false,
      "declare": false,
      "start": 153,
      "end": 220
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 230
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 241
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 285,
            "end": 291
          }
        ],
        "start": 242,
        "end": 293
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 95,
  "end": 293
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 159,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 162,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 228,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  }
]
```
